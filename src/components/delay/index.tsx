import React, { FC, useEffect, useState } from 'react'

interface IProps {
  run: boolean,
  wait: number
}

export const DelayComponent:FC<IProps> = ({ run, wait, children }) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout:any = null
    if (run) {
      timeout = setTimeout(() => {
        setShow(true)
      }, wait)
    }
    return () => clearTimeout(timeout)
  }, [show, run, wait])

  if (show) return null

  return <>{children}</>
}
