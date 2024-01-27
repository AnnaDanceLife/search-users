import { useEffect, useState } from 'react'
import axios from 'axios'
import { Users } from '../../components/users/Users'
import { Filter } from '../../components/filter/Filter'
import * as S from './MainPage.styles'
import { Loader } from '../../App.styles'

export const MainPage = () => {
  const [searchText, setSearchText] = useState('')
  const [usersList, setUsersList] = useState([])
  const [order, setOrder] = useState('desc')
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const numberOfUsersOnPage = 12
  const numberOfPage = `${pageNumber}`
  // const arrayNumberOfPage = [
  //   { value: 'one', name: 1 },
  //   { value: 'two', name: 2 },
  //   { value: 'three', name: 3 },
  //   { value: 'four', name: 4 },
  //   { value: 'five', name: 5 },
  // ]
  useEffect(() => {
    if (searchText) {
      setIsLoading(true)
      // setError(null)
      axios
        .get(' https://api.github.com/search/users', {
          params: {
            q: searchText,
            sort: 'repositories',
            order: order,
            per_page: numberOfUsersOnPage,
            page: numberOfPage,
          },
        })
        .then((response) => {
          setUsersList(response.data.items)
          setError(null)
        })
        .catch((er) => {
          if (er.response.status === 422 || er.response.status === 403) {
            setError('Введите логин пользователя, которого хотите найти')
            return
          } else if (er.response.status === 503) {
            setError('Сервис не доступен, попробуйте позже')
            return
          }
        })
    }
    setIsLoading(false)
  }, [searchText, numberOfPage, order])
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
        <>
          <Users usersData={usersList} />

          <S.PaginationContainer>
            <S.PageNumber>1</S.PageNumber>
            <S.PageNumber>2</S.PageNumber>
            <S.PageNumber>3</S.PageNumber>
            <S.PageNumber>4</S.PageNumber>
            <S.PageNumber>5</S.PageNumber>
          </S.PaginationContainer>
        </>
      )}
    </S.MainContainer>
  )
}
