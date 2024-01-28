import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
`

export const PageNumber = styled.div`
  font-size: 32px;
  font-weight: 600;
  line-height: 33px;

  ${({ $activePage }) =>
$activePage && 'color:  #009ee4; cursor: pointer;'}

`





