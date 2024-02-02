import styled from 'styled-components'
import { Button } from '../../App.styles'

export const SearchBlock = styled.div`
  display: flex;
  gap: 10px;
`

export const SearchText = styled.input`
  width: 100%;
  height: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: transparent;
  padding: 13px 19px;
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;

  &::placeholder {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
  }
`

export const SearchButton = styled(Button)`
  width: 158px;
  height: 50px;
  font-size: 16px;
  line-height: 24px;
  justify-content: center;
  align-items: center;
`

export const MainTitle = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  line-height: 220%;
  margin-bottom: 30px;
  margin-top: 30px;
`

export const MainHeading = styled(MainTitle)`
  font-size: 24px;
`
