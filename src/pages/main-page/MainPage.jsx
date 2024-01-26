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
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(searchText){
    setIsLoading(true)
    axios
      .get(' https://api.github.com/search/users', {
        params: {
          q: searchText,
          sort: 'repositories',
          order: order,
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
      })}
    setIsLoading(false)
  }, [searchText])
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
      <Filter />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <S.Error>{error}</S.Error>
      ) : (
        <Users usersData={usersList} />
      )}
    </S.MainContainer>
  )
}
