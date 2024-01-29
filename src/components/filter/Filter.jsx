import { useState } from 'react'
import * as S from './Filter.styles'

export const Filter = ({ setOrder }) => {
  const [activeFilter, setActiveFilter] = useState('desc')

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Количество репозиториев:</S.FilterTitle>
      <S.FilterButton
        aria-hidden="true"
        key="desc"
        $activeButton={activeFilter === 'desc'}
        onClick={() => {
          setActiveFilter('desc')
          setOrder('desc')
        }}
      >
        по убыванию
      </S.FilterButton>
      <S.FilterButton
        aria-hidden="true"
        key="asc"
        $activeButton={activeFilter === 'asc'}
        onClick={() => {
          setActiveFilter('asc')
          setOrder('asc')
        }}
      >
        по возрастанию
      </S.FilterButton>
    </S.CenterblockFilter>
  )
}
