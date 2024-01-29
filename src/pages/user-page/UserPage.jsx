import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import * as S from './UserPage.styles'

export const UserPage = ({ usersList }) => {
  const params = useParams()
  const loginUser = params.id

  const navigate = useNavigate()

  const userInfo = usersList.filter((user) => user.login === loginUser)

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
      <S.ProfileUser>
        <S.UserAvatar>
          <S.UserAvatarImg src={userInfo[0].avatar_url} />
        </S.UserAvatar>
        <S.UserInfoContainer>
          <S.UserInfoText>Логин: {userInfo[0].login}</S.UserInfoText>
          <S.UserInfoText>Тип: {userInfo[0].type}</S.UserInfoText>
          <S.UserInfoText>
            Профиль на GitHub доступен по адресу: {userInfo[0].url}
          </S.UserInfoText>
        </S.UserInfoContainer>
      </S.ProfileUser>
    </>
  )
}
