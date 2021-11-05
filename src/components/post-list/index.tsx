import { Button, Card, Col, Pagination, Row, Skeleton } from 'antd'
import React, { FC } from 'react'
import { useAppSelector, usePagination, useUrlParams } from '../../hooks/app'
import { URL_KEYS } from '../../constants/url-keys'
import { Post } from '../../entities/post'
import { DelayComponent } from '../delay'

interface IProps {
  handleShowDetail: (item: Post) => void
}

const getFakeArr = (p: number) => {
  const tmp = []
  for (let i = 0; i < p; i++) {
    tmp.push(i)
  }

  return tmp
}

export const PostList: FC<IProps> = ({ handleShowDetail }) => {
  const { data, loading } = useAppSelector(state => state.postsReducer.postList)
  const { onPageChange } = usePagination()
  const { urlData } = useUrlParams()

  const page = Number(urlData?.[URL_KEYS.PAGE]) || 1
  const pageSize = Number(urlData?.[URL_KEYS.LIMIT]) || 10

  return (
    <Row gutter={[16, 16]}>
      <DelayComponent wait={500} run={loading === 'succeeded' && data.length > 0}>
        {
          getFakeArr(10).map(item => (
            <Col xs={24} sm={12} key={item}>
              <Card title={<Skeleton title={false} active paragraph={{ rows: 1 }}/>}>
                <div className='post-content'>
                  <Skeleton title={false} paragraph={{ rows: 3 }} active/>
                </div>

                <Skeleton.Button active size='default' style={{ width: 100 }}/>
              </Card>
            </Col>
          ))
        }
      </DelayComponent>
      {
        loading === 'succeeded' && data.length > 0 && (
          <>
            {
              data.map(item => (
                <Col key={item.id} xs={24} sm={12}>
                  <Card className='post-card' title={item.title}>
                    <div className='post-content'>
                      <span>
                        {item.body}
                      </span>
                    </div>
                    <Button size='middle' onClick={() => handleShowDetail(item)}>
                      Show more
                    </Button>
                  </Card>
                </Col>
              ))
            }
            <Col span={24}>
              <Pagination
                onChange={onPageChange}
                hideOnSinglePage
                showLessItems
                pageSizeOptions={['10', '20', '50']}
                total={100}
                current={page}
                pageSize={pageSize}
              />
            </Col>
          </>
        )
      }
    </Row>
  )
}
