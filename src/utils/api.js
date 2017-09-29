import axios from 'axios'
import queryString from 'query-string'

export const host = `http://192.168.1.18:3000`

const customAxios = axios.create({
  baseURL: host,
  timeout: 5000
})

const createApiUrl = (pathArr, query) => {
  const stringified = queryString.stringify(query)
  let queryUrl = `${host}/${pathArr.join('/')}`
  if (stringified.length) queryUrl += '?' + stringified
  return queryUrl
}

const api = {
  axios,
  getTouch () {
    return customAxios({
      requestId: 'getTouch',
      method: 'get',
      url: createApiUrl([ 'api', 'touch' ])
    })
  }
}

export default api
