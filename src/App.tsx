import React from 'react'
import { usePostList } from './hooks/post'
import { SinglePost } from './components/singe-post'
import { ModalUI } from './components/modal'
import { PostList } from './components/post-list'
import Title from 'antd/lib/typography/Title'

function App () {
  const { handleShowDetail, visible, setVisible } = usePostList()

  return (
    <>
      <ModalUI
        component={<SinglePost/>}
        title='Post Detail'
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      />
      <div className='app'>
        <div className='container'>
          <Title level={4}>
            Post List
          </Title>
          <PostList handleShowDetail={handleShowDetail}/>
        </div>
      </div>
    </>
  )
}

export default App
