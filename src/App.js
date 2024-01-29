import axios from 'axios'
import { AppRoutes } from './AppRoutes'
import { useEffect, useState } from 'react'
import { baseUrl } from './utils/BaseUrl'

export const App = () => {
  const [searchText, setSearchText] = useState('')
  const [usersList, setUsersList] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [pagesCount, setPagesCount] = useState(0)
  const [order, setOrder] = useState('desc')
  const [pageNumber, setPageNumber] = useState(1)

  const numberOfUsersOnPage = 12

  useEffect(() => {
    if (searchText) {
      setIsLoading(true)
      setError(null)
      axios
        .get(baseUrl, {
          params: {
            q: searchText,
            sort: 'repositories',
            order: order,
            per_page: numberOfUsersOnPage,
            page: `${pageNumber}`,
          },
        })
        .then((response) => {
          setUsersList(response.data.items)
          setPagesCount(
            Math.ceil(response.data.total_count / numberOfUsersOnPage),
          )
          setIsLoading(false)
        })
        .catch((er) => {
          if (er.response.status === 422) {
            setError('Введите логин пользователя, которого хотите найти')
            return
          } else if (er.response.status === 403) {
            setError('Превышен лимит запросов к серверу, попробуйте позже')
            return
          } else if (er.response.data.status === 503) {
            setError('Сервис не доступен, попробуйте позже')
            return
          }
        })
    }
  }, [searchText, pageNumber, order])

  return (
    <AppRoutes
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
  )
}
