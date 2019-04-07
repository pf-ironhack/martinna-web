import http from './BaseService'

const getBrands = ({ tag, startDate, endDate }) => {
  const params = {};
  if (tag) {
    params.tag = tag
  }
  if (startDate) {
    params.startDate = startDate
  }
  if (endDate) {
    params.endDate = endDate
  }
  return http.get(`/brands`, { params: params })
    .then(response => response.data)
}

const getCategories = () => http.get('/brands/categories').then(response => response.data);

export default {
  getBrands,
  getCategories
}