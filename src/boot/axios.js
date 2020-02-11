import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost/sampleLaravel/public/api/'
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
