import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from '../../components/users/Users'
import { Filter } from '../../components/filter/Filter'
import * as S from './MainPage.styles'
import { Loader } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'

export const MainPage = () => {
  const [searchText, setSearchText] = useState('')
  const [usersList, setUsersList] = useState([])
  const [order, setOrder] = useState('desc')
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pagesCount, setPagesCount] = useState(0)

  const numberOfUsersOnPage = 12

  useEffect(() => {
    if (searchText) {
      setIsLoading(true)
      setError(null)
      axios
        .get(' https://api.github.com/search/users', {
          params: {
            q: searchText,
            sort: 'repositories',
            order: order,
            per_page: numberOfUsersOnPage,
            page: `${pageNumber}`,
          },
        })
        .then((response) => {
          setUsersList(response.data.items)
          setPagesCount(
            Math.ceil(response.data.total_count / numberOfUsersOnPage),
          )
          setError(null)
        })
        .catch((er) => {
          if (
            er.response.data.status === 422 ||
            er.response.data.status === 403
          ) {
            setError('Введите логин пользователя, которого хотите найти')
            return
          } else if (er.response.data.status === 503) {
            setError('Сервис не доступен, попробуйте позже')
            return
          }
        })
    }
    setIsLoading(false)
  }, [searchText, pageNumber, order])

  const handleNextPageClick = useCallback(() => {
    const current = pageNumber
    const next = current + 1
    const total = usersList ? pagesCount : current

    setPageNumber(next <= total ? next : current)
  }, [pageNumber, usersList])

  const handlePrevPageClick = useCallback(() => {
    const current = pageNumber
    const prev = current - 1

    setPage(prev > 0 ? prev : current)
  }, [pageNumber])

  return (
    <S.MainContainer>
      <S.Search
        type="search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Введите логин пользователя"
        name="search"
      />
      <S.MainTitle>Пользователи GitHub</S.MainTitle>
      <Filter setOrder={setOrder} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <S.Error>{error}</S.Error>
      ) : (
        <Users usersData={usersList} />
      )}

      {usersList && (
        <Pagination
          onNextPageClick={handleNextPageClick}
          onPrevPageClick={handlePrevPageClick}
          disable={{
            left: pageNumber === 1,
            right: pageNumber === pagesCount,
          }}
          nav={{ current: pageNumber, total: pagesCount }}
        />
      )}
    </S.MainContainer>
  )
}
