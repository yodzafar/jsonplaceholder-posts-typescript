import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

httpClient.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

httpClient.interceptors.request.use(config => {
  return config
})

interface IParams<D = {}, P = {}> {
  url: string,
  headers?: any
  data?: D,
  params?: P,
  onUploadProgress?: AxiosRequestConfig['onUploadProgress']
}

export const httpGet = (params: IParams): AxiosPromise =>
  httpClient({
    method: 'get',
    ...params
  })

export const httpPost = (params: IParams): AxiosPromise =>
  httpClient({
    method: 'post',
    ...params
  })

export const httpPut = (params: IParams): AxiosPromise =>
  httpClient({
    method: 'put',
    ...params
  })

export const httpPatch = (params: IParams): AxiosPromise =>
  httpClient({
    method: 'patch',
    ...params
  })

export const httpDelete = (params: IParams): AxiosPromise =>
  httpClient({
    method: 'delete',
    ...params
  })
