import { FC, useState } from 'react'
import { Avatar, List, Button, message } from 'antd'
import { useQuery, UseErrorBoundary } from '@tanstack/react-query'
import { apiGetCommentList } from '@/api'
import { ProCard } from '@ant-design/pro-components'
import { CommentModel } from '@/typings'
import _ from 'lodash'
import { AxiosError } from 'axios'

const HomePage: FC = () => {
  const [queryKey, setQueryKey] = useState<Array<number>>([1, 10])

  async function getData({ queryKey }): Promise<Array<CommentModel>> {
    const [, page, page_row] = queryKey
    const res = await apiGetCommentList({ page, page_row })
    return res.data
  }

  const { data, isLoading, refetch } = useQuery<Array<CommentModel>>(['commentData', ...queryKey], getData, {
    staleTime: 1000 * 60 * 5,
  })

  return (
    <div>
      <ProCard loading={isLoading}>
        <Button
          type="primary"
          onClick={() => {
            setQueryKey([_.random(1, 100), _.random(10, 20)])
          }}>
          随机
        </Button>
        <Button
          type="dashed"
          onClick={() => {
            refetch()
          }}>
          刷新
        </Button>
        <Button
          type="link"
          onClick={() => {
            setQueryKey([1, 10])
          }}>
          重置
        </Button>
        <List
          itemLayout="horizontal"
          dataSource={data}
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
      </ProCard>
    </div>
  )
}

export default HomePage
