import * as S from './Pagination.styles'

export const Pagination = ({
  onNextPageClick,
  onPrevPageClick,
  nav = null,
  disable,
}) => {
  const handleNextPageClick = () => {
    onNextPageClick()
  }
  const handlePrevPageClick = () => {
    onPrevPageClick()
  }

  return (
    <S.PaginationContainer>
      <button
        type="button"
        onClick={handlePrevPageClick}
        disabled={disable.left}
      >
        {'<'}
      </button>
      {nav && (
        <span>
          {nav.current} / {nav.total}
        </span>
      )}
      <button
        type="button"
        onClick={handleNextPageClick}
        disabled={disable.right}
      >
        {'>'}
      </button>
    </S.PaginationContainer>
  )
}
