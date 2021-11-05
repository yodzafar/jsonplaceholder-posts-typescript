import React from 'react'
import { useAppSelector } from '../../hooks/app'
import { Avatar, Col, Row } from 'antd'
import Title from 'antd/lib/typography/Title'
import Text from 'antd/lib/typography/Text'
import avatar from '../../assets/image/avatar.png'

export const UserInfo = () => {
  const { user } = useAppSelector(state => state.userReducer)

  return (
    <Row gutter={16} wrap={false}>
      <Col>
        <Avatar src={avatar} size={40}/>
      </Col>
      <Col>
        <Title style={{ marginBottom: 0 }} level={5}>
          {user?.name}
        </Title>
        <Text>
          {user?.username ? `@${user?.username}` : ''}
        </Text>
      </Col>
    </Row>
  )
}
