import { Link } from 'react-router-dom'
import * as S from './Users.styles'

export const Users = ({ usersData }) => {
  // Поиск

  // const filterAds = () => {
  //   let filteredAds = data

  //   if (searchText.length > 0) {
  //     filteredAds = filteredAds.filter(
  //       (ads) =>
  //         ads.title?.toLowerCase().includes(searchText?.toLowerCase()) ||
  //         ads.description?.toLowerCase().includes(searchText?.toLowerCase()),
  //     )
  //   }
  //   return filteredAds
  // }

  // const filteredAds = searchText ? filterAds() : data

  return (
    <S.MainContent>
      <S.Cards>
        {usersData?.map((user) => (
          <S.CardsItem key={user.id}>
            <S.Card>
              <S.CardImg>
                <Link to={`/user/${user.login}`}>
                  <img
                    src={user.avatar_url}
                    alt="picture"
                  />
                </Link>
              </S.CardImg>
              <S.CardContent>
                <S.CardTitle>{user.login}</S.CardTitle>
                <Link to={`/user/${user.login}`}>
                  <S.CardDetails>Подробнее</S.CardDetails>
                </Link>
              </S.CardContent>
            </S.Card>
          </S.CardsItem>
        ))}
      </S.Cards>
    </S.MainContent>
  )
}
