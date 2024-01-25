import { Outlet } from 'react-router-dom'
import {
  Container,
  GlobalStyles,
//   Main,
//   MainContainer,
  Wrapper,
  Header,
} from '../../App.styles'
// import { Search } from '../../components/search/Search'
// import { Context } from '../../context/searchContext'
import { useState } from 'react'

export const AppLayout = () => {
//   const [searchText, setSearchText] = useState('')

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Header />
          <Outlet />
          {/*
              <Search />
              <MainContainer>
                <Outlet />
              </MainContainer>
           */}
        </Container>
      </Wrapper>
    </>
  )
}
