import { useCallback, useState } from 'react'
import * as S from './MainPage.styles'
import { Users } from '../../components/users/Users'
import { Filter } from '../../components/filter/Filter'
import { Loader, Error } from '../../App.styles'
import { Pagination } from '../../components/pagination/Pagination'

export const MainPage = ({
  searchText,
  setSearchText,
  usersList,
  error,
  isLoading,
  pagesCount,
  setOrder,
  pageNumber,
  setPageNumber,
}) => {
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
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error>{error}</Error>
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
