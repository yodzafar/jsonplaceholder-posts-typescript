import { useCallback, useEffect, useState } from 'react'
import { getPost, getPostList } from '../../model/posts'
import { useAppDispatch, useUrlParams } from '../app'
import { IQuery } from '../../types/query'
import { URL_KEYS } from '../../constants/url-keys'
import { Post } from '../../entities/post'
import { getUser } from '../../model/users'

export function usePostList () {
  // Local states
  const [visible, setVisible] = useState<boolean>(false)

  // Hooks
  const dispatch = useAppDispatch()
  const { urlData } = useUrlParams()

  const _start = Number(urlData?.[URL_KEYS.PAGE]) || 1
  const _limit = Number(urlData?.[URL_KEYS.LIMIT]) || 10

  const handleShowDetail = useCallback((item: Post) => {
    setVisible(true)
    console.log(item)
    dispatch(getPost(item.id))
    dispatch(getUser(item.userId))
  }, [dispatch])

  useEffect(() => {
    let timeout: any

    timeout = setTimeout(() => {
      const params: IQuery = {
        _limit,
        _start
      }
      dispatch(getPostList(params))
    }, 300)

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = null
    }
  }, [dispatch, _limit, _start])

  return {
    handleShowDetail,
    setVisible,
    visible
  }
}
