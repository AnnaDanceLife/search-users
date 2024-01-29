import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/not-found/NotFound'
import { MainPage } from './pages/main-page/MainPage'
import { AppLayout } from './pages/main-page/AppLayout'
import { UserPage } from './pages/user-page/UserPage'

export const AppRoutes = ({
  searchText,
  setSearchText,
  usersList,
  error,
  isLoading,
  pagesCount,
  setOrder,
  pageNumber,
  setPageNumber,
}) => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          index
          element={
            <MainPage
              searchText={searchText}
              setSearchText={setSearchText}
              usersList={usersList}
              error={error}
              isLoading={isLoading}
              pagesCount={pagesCount}
              setOrder={setOrder}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
            />
          }
        />
        <Route
          path="/user/:id"
          element={<UserPage usersList={usersList} />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
