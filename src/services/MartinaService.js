import http from './BaseService'

const getBrand = () => http.get('brands').then(response => response.data)

export default {
  getBrand
}