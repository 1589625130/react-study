import { FC, useEffect } from 'react'
import { Avatar, Card, Divider, List } from 'antd'
import { getCommentList, selectCommentList, selectCommentStatus } from '@/store/comment'
import { useAppDispatch, useAppSelector } from '@/store/hook'
import AddComment from '@/components/AddComment'

const HomePage: FC = () => {
  const dispatch = useAppDispatch()
  const commentList = useAppSelector(selectCommentList)
  const commentStatus = useAppSelector(selectCommentStatus)
  useEffect(() => {
    if (commentStatus === 'idle') {
      console.log('commentStatus', commentStatus)
      dispatch(getCommentList({}))
    }
    console.log('commentList', commentList)
  }, [commentStatus])

  return (
    <div>
      <Divider plain orientation="left">
        home page
      </Divider>
      <AddComment />
      <Card>
        <List
          loading={commentStatus === 'loading'}
 "loading"itemLayout="horizontal"
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
      </Card>
    </div>
  )
}

export default HomePage
