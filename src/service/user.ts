import { httpGet } from './index'

export default {
  getUser: (id: number) => httpGet({ url: `/users/${id}` })
}
