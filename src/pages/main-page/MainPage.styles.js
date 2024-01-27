import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1208px;
  margin: 0 auto;
  padding: 4px 10px 30px;
`

export const Search = styled.input`
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

export const Error = styled.div`
  color: coral;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: left;
`

export const MainTitle = styled.h2`
  color: #000;
  font-size: 40px;
  font-style: normal;
  line-height: 220%;
  margin-bottom: 10px;
`

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
`
