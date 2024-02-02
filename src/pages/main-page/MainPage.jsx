import { useCallback, useEffect, useState } from 'react'
import * as S from './MainPage.styles'
import { Users } from '../../components/users/Users'
import { Filter } from '../../components/filter/Filter'
import { Loader, Error } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'
import { USER_PER_PAGE } from '../../utils/Constant'
import { getUsers } from '../../api/apiUsers'

export const MainPage = ({
  usersList,
  setUsersList,
  searchText,
  setSearchText,
  setPageNumber,
  pageNumber,
}) => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pagesCount, setPagesCount] = useState(0)
  const [order, setOrder] = useState('desc')

  const getDataUsers = async () => {
    await getUsers({ searchText, pageNumber, order })
      .then((response) => {
        setUsersList(response.data.items)
        setPagesCount(Math.ceil(response.data.total_count / USER_PER_PAGE))
        // setIsLoading(false)
        if (response.data.items.length === 0) {
          setError(
            'Пользователи с таким логином не найдены. Проверьте корректность своего запроса.',
          )
          return
        }
      })
      .catch((er) => {
        // setIsLoading(false)
        console.log(er)
        if (er.response.status === 422) {
          setError('Введите логин пользователя, которого хотите найти')
        } else if (er.response.status === 403) {
          setError('Превышен лимит запросов к серверу, попробуйте позже')
        } else if (er.response.status === 503) {
          setError('Сервис не доступен, попробуйте позже')
        }
        setError(er.message)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    if (searchText) {
      setIsLoading(true)
      setError(null)
      getDataUsers()
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
        onChange={(e) => {
          setSearchText(e.target.value)
          setPageNumber(1)
        }}
        placeholder="Введите логин пользователя"
        name="search"
      />
      <S.MainTitle>Пользователи GitHub</S.MainTitle>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error>{error}</Error>
      ) : !usersList.length > 0 ? (
        <S.MainHeading>
          Здесь будет список найденных пользователей
        </S.MainHeading>
      ) : (
        <>
          <Filter setOrder={setOrder} />

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
