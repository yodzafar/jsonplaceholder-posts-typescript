import { Col, Row } from 'antd'
import React from 'react'
import { UserInfo } from './_user'
import { PostInfo } from './_post'

export const SinglePost = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <UserInfo/>
      </Col>
      <Col span={24}>
        <PostInfo/>
      </Col>
    </Row>
  )
}
