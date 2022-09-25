import { FC, ReactElement, useEffect, useState } from 'react'
import { apiGetCommentList } from '@/api/comment'
import { Avatar, Button, Card, List } from 'antd'
import { Link } from 'react-router-dom'
import { ModalForm } from '@ant-design/pro-components'

const IndexPage: FC = (): ReactElement => {
  const [commentList, setCommentList] = useState<Array<CommentModel>>([])
  useEffect(() => {
    apiGetCommentList({}).then((res: ResponseData<Array<CommentModel>>) => {
      setCommentList(res.data)
      console.log({ commentList })
    })
  }, [])
  console.log(import.meta.env)
  return (
    <div>
      <ModalForm trigger={<Button>添加</Button>}></ModalForm>
      <Card bordered={true}>
        <List
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
      </Card>
      <Link to="/home">home</Link>
    </div>
  )
}

export default IndexPage
