import { useState } from 'react'
import * as S from './Filter.styles'

const date = [
  { value: 'default', name: 'По умолчанию' },
  { value: 'new', name: 'Сначала новые' },
  { value: 'old', name: 'Сначала старые' },
]

export const Filter = ({setDateTrack}) => {
  const [activeFilter, setActiveFilter] = useState(null)

  const filterClickHandler = (id) => {
    setActiveFilter(activeFilter === id ? null : id)
  }


  return (
    <S.CenterblockFilter>
    <S.FilterTitle>Количество репозиториев:</S.FilterTitle>
    <S.FilterButton
      aria-hidden="true"
      className="_btn-text"
      onClick={() => {
        return filterClickHandler('year')
      }}
    >
      По умолчанию
    </S.FilterButton>
    {activeFilter === 'year' && (
      <S.FilterPopup>
        <S.PopupList>
          {date.map((item) => {
            return (
              <S.PopupText
                key={item.value}
                onClick={() => setDateTrack(item.value)}
              >
                {item.name}
              </S.PopupText>
            )
          })}
        </S.PopupList>
      </S.FilterPopup>
    )}
  </S.CenterblockFilter>
  )
}
