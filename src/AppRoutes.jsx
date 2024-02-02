import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/not-found/NotFound'
import { MainPage } from './pages/main-page/MainPage'
import { AppLayout } from './pages/main-page/AppLayout'
import { UserPage } from './pages/user-page/UserPage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          index
          element={<MainPage />}
        />
        <Route
          path="/user/:id"
          element={<UserPage />}
        />
      </Route>
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}
