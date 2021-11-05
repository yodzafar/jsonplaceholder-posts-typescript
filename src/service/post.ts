import { httpGet } from './index'

export default {
  getPostList: () => httpGet({ url: '/posts' })
}
