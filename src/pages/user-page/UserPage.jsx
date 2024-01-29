import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from './UserPage.styles'
import axios from 'axios'
import { Loader, Error } from '../../App.styles'
import { useEffect, useState } from 'react'
import { baseUrl } from '../../utils/BaseUrl'

export const UserPage = () => {
  const params = useParams()
  const loginUser = params.id

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    axios
      .get(baseUrl + `?q=${loginUser}`)
      .then((response) => {
        setUserData(response.data.items[0])
        setIsLoading(false)
      })
      .catch((er) => {
        if (er.response.status === 503) {
          setError('Сервис не доступен, попробуйте позже')
          return
        }
      })
  }, [])

  return (
    <>
      <S.GoMainPageButton
        onClick={() => {
          navigate('/', { replace: true })
        }}
      >
        Вернуться на главную
      </S.GoMainPageButton>

      <S.ProfileTitle>Информация о пользователе</S.ProfileTitle>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error>{error}</Error>
      ) : (
        <S.ProfileUser>
          <S.UserAvatar>
            <S.UserAvatarImg src={userData.avatar_url} />
          </S.UserAvatar>
          <S.UserInfoContainer>
            <S.UserInfoText>Логин: {userData.login}</S.UserInfoText>
            <S.UserInfoText>Тип: {userData.type}</S.UserInfoText>
            <S.UserInfoText>
              Профиль на GitHub доступен по адресу: {userData.url}
            </S.UserInfoText>
          </S.UserInfoContainer>
        </S.ProfileUser>
      )}
    </>
  )
}
