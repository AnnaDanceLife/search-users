import { useState } from 'react'
import * as S from './Filter.styles'

export const Filter = ({ setOrder }) => {
  const [activeFilter, setActiveFilter] = useState('desc')

  // const filterClickHandler = (id) => {
  //   setActiveFilter(activeFilter === id ? null : id)
  // }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Количество репозиториев:</S.FilterTitle>
      <S.FilterButton
        aria-hidden="true"
        key="desc"
        $activeButton={activeFilter === 'desc'}
        onClick={() => {
          setOrder('desc')
          setActiveFilter('desc')
          // return filterClickHandler('year')
        }}
      >
        по убыванию
      </S.FilterButton>
      <S.FilterButton
        aria-hidden="true"
        key="asc"
        $activeButton={activeFilter === 'asc'}
        onClick={() => {
          setOrder('asc')
          setActiveFilter('asc')

          // return filterClickHandler('year')
        }}
      >
        по возрастанию
      </S.FilterButton>
    </S.CenterblockFilter>
  )
}
