import { httpGet } from './index'
import { IQuery } from '../types/query'

export default {
  getPostList: (params: IQuery) => httpGet({ url: '/posts', params }),
  getPost: (id: number) => httpGet({ url: `/posts/${id}` })
}
