import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './MainPage.styles'
import { Users } from '../../components/users/Users'
import { Filter } from '../../components/filter/Filter'
import { Loader, Error } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'
import { baseUrl } from '../../utils/BaseUrl'

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
        .get(baseUrl, {
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
          setIsLoading(false)
        })
        .catch((er) => {
          if (er.response.status === 422) {
            setError('Введите логин пользователя, которого хотите найти')
            return
          } else if (er.response.status === 403) {
            setError('Превышен лимит запросов к серверу, попробуйте позже')
            return
          } else if (er.response.data.status === 503) {
            setError('Сервис не доступен, попробуйте позже')
            return
          }
        })
    }
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

    setPageNumber(prev > 0 ? prev : current)
  }, [pageNumber])

  return (
    <>
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
        <Error>{error}</Error>
      ) : (
        <>
          <Users usersData={usersList} />

          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: pageNumber === 1,
              right: pageNumber === pagesCount,
            }}
            nav={{ current: pageNumber, total: pagesCount }}
          />
        </>
      )}
    </>
  )
}
