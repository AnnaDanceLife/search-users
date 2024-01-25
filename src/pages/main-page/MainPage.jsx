// import { useGetAdsQuery } from '../../api/adsApi'
import { useState } from 'react'
import { Users } from '../../components/users/Users'
import * as S from './MainPage.styles'
import { Filter } from '../../components/filter/Filter'

export const MainPage = () => {
  //   const { data = [], isLoading, error } = useGetAdsQuery()
  const [searchText, setSearchText] = useState('')

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
      <Users
      // data={data}
      // isLoading={isLoading}
      // error={error}
      />
    </S.MainContainer>
  )
}
