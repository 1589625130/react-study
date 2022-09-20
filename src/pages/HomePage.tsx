import { FC, useEffect } from 'react'
import { Avatar, Divider, List } from 'antd'
import { getCommentList, selectCommentList, selectCommentStatus } from '@/store/comment'
import { useAppDispatch, useAppSelector } from '@/store/hook'

const HomePage: FC = () => {
  const dispatch = useAppDispatch()
  const commentList = useAppSelector(selectCommentList)
  const commentStatus = useAppSelector(selectCommentStatus)
  useEffect(() => {
    if (commentStatus === 'idle') {
      console.log('commentStatus', commentStatus)
      dispatch(getCommentList({}))
    }
  }, [commentStatus])

  return (
    <div>
      <Divider plain orientation="left">
        home page
      </Divider>
      <List
        loading={commentStatus === 'loading'}
        itemLayout="horizontal"
        dataSource={commentList}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.user_avatar} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.content}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default HomePage
