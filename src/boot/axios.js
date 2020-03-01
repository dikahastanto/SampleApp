import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://192.168.43.55/sampleLaravel/public/api/'
})
export default async ({ Vue }) => {
  Vue.prototype.$axios = axiosInstance
}
export { axiosInstance }
