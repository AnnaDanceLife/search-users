import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../../context/Context'
import {
  Container,
  GlobalStyles,
  Header,
  MainContainer,
} from '../../App.styles'

export const AppLayout = () => {
  const [usersList, setUsersList] = useState([])
  const [searchText, setSearchText] = useState('')
  const [pageNumber, setPageNumber] = useState(1)

  const contextValue = [
    usersList,
    setUsersList,
    searchText,
    setSearchText,
    pageNumber,
    setPageNumber,
  ]

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <MainContainer>
          <Context.Provider value={contextValue}>
            <Outlet />
          </Context.Provider>
        </MainContainer>
      </Container>
    </>
  )
}
