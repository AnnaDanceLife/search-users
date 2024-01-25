import * as S from './Users.styles'
import { Loader } from '../../App.styles'
// import { baseUrl } from '../../utils/baseUrl'

export const Users = ({ data, isLoading, error }) => {
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

      {/* {isLoading ? (
        <Loader />
      ) : error ? (
        <p> Не удалось загрузить список товаров, попробуйте позже</p>
      ) : (
        <S.Cards>
          {filteredAds?.map((ad) => (
            <S.CardsItem key={ad.id}>
              <S.Card>
                <S.CardImg>
                  <Link to={`/adv/${ad.id}`}>
                    <img
                      src={
                        ad?.images[0]
                          ? baseUrl + ad.images[0].url
                          : '/img/nopic.png'
                      }
                      alt="picture"
                    />
                  </Link>
                </S.CardImg>
                <S.CardContent>
                  <Link to={`/adv/${ad.id}`}>
                    <S.CardTitle>{ad.title}</S.CardTitle>
                  </Link>
                  <S.CardPrice>{ad.price.toLocaleString('ru')} ₽</S.CardPrice>
                  <S.CardPlace>{ad.user.city}</S.CardPlace>
                  <S.CardDate>{formatDate(ad.created_on)}</S.CardDate>
                </S.CardContent>
              </S.Card>
            </S.CardsItem>
          ))}
        </S.Cards>
      )} */}
    </S.MainContent>
  )
}
