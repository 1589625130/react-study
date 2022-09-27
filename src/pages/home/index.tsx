import { FC } from 'react'
import { Avatar, List } from 'antd'
import { useQuery } from '@tanstack/react-query'
import { apiGetCommentList } from '@/api'
import { ProCard } from '@ant-design/pro-components'
import { CommentModel } from '@/typings'

const HomePage: FC = () => {
  // const dispatch = useAppDispatch()
  // const commentList = useAppSelector(selectCommentList)
  // const commentStatus = useAppSelector(selectCommentStatus)
  // useEffect(() => {
  //   if (commentStatus === 'idle') {
  //     console.log('commentStatus', commentStatus)
  //     dispatch(getCommentList({ page: 1, page_row: 10 }))
  //   }
  //   console.log('commentList', commentList)
  // }, [commentStatus])

  async function getData(): Promise<Array<CommentModel>> {
    const res = await apiGetCommentList({ page: 1, page_row: 10 })
    return res.data
  }

  const { data, isLoading, isError, error } = useQuery(['commentData'], getData, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    refetchIntervalInBackground: false,
  })

  return (
    <div>
      <ProCard loading={isLoading}>
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
