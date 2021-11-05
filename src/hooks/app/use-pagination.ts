import { useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { URL_KEYS } from '../../constants/url-keys'

export function usePagination () {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const onChange = useCallback((pagination) => {
    const url: string[] = []

    if (pagination.current !== 1) {
      url.push(`${URL_KEYS.PAGE}=${pagination.current}`)
    }

    if (pagination.pageSize !== 10) {
      url.push(`${URL_KEYS.LIMIT}=${pagination.pageSize}`)
    }

    navigate({
      pathname,
      search: url.join('&')
    })
  }, [navigate, pathname])

  const onPageChange = useCallback((page, pageSize) => {
    const url: string[] = []

    if (page !== 1) {
      url.push(`${URL_KEYS.PAGE}=${page}`)
    }

    if (pageSize !== 10) {
      url.push(`${URL_KEYS.LIMIT}=${pageSize}`)
    }

    navigate({
      pathname,
      search: url.join('&')
    })
  }, [pathname, navigate])

  return {
    onChange,
    onPageChange
  }
}
