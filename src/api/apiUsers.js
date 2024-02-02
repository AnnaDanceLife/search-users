import axios from 'axios'
import { baseUrl } from '../utils/BaseUrl'
import { USER_PER_PAGE } from '../utils/Constant'

export async function getUsers({ searchText, pageNumber, order }) {
  const response = await axios.get(baseUrl, {
    params: {
      q: searchText,
      sort: 'repositories',
      order: order,
      per_page: USER_PER_PAGE,
      page: `${pageNumber}`,
    },
  })

  return response
}
