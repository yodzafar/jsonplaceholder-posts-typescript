import React from 'react'
import { useAppSelector } from '../../hooks/app'
import Title from 'antd/es/typography/Title'
import Text from 'antd/es/typography/Text'

export const PostInfo = () => {
  const { data } = useAppSelector(state => state.postsReducer.post)

  return (
    <>
      <Title level={5}>
        {data?.title}
      </Title>
      <Text>
        {data?.body}
      </Text>
    </>
  )
}
