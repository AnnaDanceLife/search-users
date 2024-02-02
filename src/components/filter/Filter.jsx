import { useState } from 'react'
import * as S from './Filter.styles'

export const Filter = ({ order, setOrder }) => {
  const [activeFilter, setActiveFilter] = useState(order)

  const handleActiveFilter = (or) => {
    setActiveFilter(or)
    setOrder(or)
  }

  return (
    <S.CenterblockFilter>
      <S.FilterTitle>Количество репозиториев:</S.FilterTitle>
      <S.FilterButton
        aria-hidden="true"
        key="desc"
        $activeButton={activeFilter === 'desc'}
        onClick={() => handleActiveFilter('desc')}
      >
        по убыванию
      </S.FilterButton>
      <S.FilterButton
        aria-hidden="true"
        key="asc"
        $activeButton={activeFilter === 'asc'}
        onClick={() => handleActiveFilter('asc')}
      >
        по возрастанию
      </S.FilterButton>
    </S.CenterblockFilter>
  )
}
