import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from './UserPage.styles'
import axios from 'axios'
import { Loader } from '../../App.styles'
import { useEffect, useState } from 'react'
// import { baseUrl } from '../../utils/baseUrl'

export const UserPage = () => {
  const params = useParams()
  const loginUser = params.id

  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState({})

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    axios
      .get(`https://api.github.com/search/users?q=${loginUser}`)
      .then((response) => {
        setUserData(response.data.items[0])
      })
      .catch((er) => {
        if (er.response.status === 503) {
          setError('Сервис не доступен, попробуйте позже')
          return
        }
      })
    setIsLoading(false)
  }, [])

  return (
    <S.ProfileContainer>
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
        <S.Error>{error}</S.Error>
      ) : (
        <S.Profile>
          <S.ProfileContent>
            <S.ProfileSettings>
              <S.SettingsLeft>
                <S.SettingsAvatar>
                  <img src={userData.avatar_url} />
                </S.SettingsAvatar>
              </S.SettingsLeft>
              <S.SettingsRight>
                <S.SellerInfoContainer>
                  <p>Логин: {userData.login}</p>
                  <p>Тип: {userData.type}</p>
                  <p>Профиль на GitHub доступен по адресу: {userData.url}</p>
                </S.SellerInfoContainer>
              </S.SettingsRight>
            </S.ProfileSettings>
          </S.ProfileContent>
        </S.Profile>
      )}
    </S.ProfileContainer>
  )
}
