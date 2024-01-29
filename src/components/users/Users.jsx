import { Link } from 'react-router-dom'
import * as S from './Users.styles'

export const Users = ({ usersData }) => {
  return (
    <S.MainContent>
      <S.Cards>
        {usersData?.map((user) => (
          <S.Card key={user.id}>
            <S.CardImg>
              <Link to={`/user/${user.login}`}>
                <S.CardImgUser
                  src={user.avatar_url}
                  alt="picture"
                />
              </Link>
            </S.CardImg>
            <S.CardTitle>{user.login}</S.CardTitle>
            <Link to={`/user/${user.login}`}>
              <S.CardDetails>Подробнее</S.CardDetails>
            </Link>
          </S.Card>
        ))}
      </S.Cards>
    </S.MainContent>
  )
}
