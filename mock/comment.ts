import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { ResponsePageResult } from './api'

interface CommentModel {
  id: string
  content: string
  user_name: string
  user_avatar: string
  created_at: string
  title: string
}

const createComment = (): CommentModel => {
  return {
    id: Mock.Random.guid(),
    user_name: Mock.Random.cname(),
    content: Mock.Random.cparagraph(1, 3),
    user_avatar: 'https://joeschmoe.io/api/v1/random',
    created_at: Mock.Random.datetime(),
    title: Mock.Random.ctitle(5, 10),
  }
}

export default [
  {
    url: '/api/comment',
    method: 'get',
    response: (): ResponsePageResult<CommentModel> => {
      const comments: Array<CommentModel> = []
      for (let i = 0; i < 10; i++) {
        comments.push(createComment())
      }
      return {
        data: comments,
        meta: {
          current_page: 1,
          page_row: 10,
          total: 100,
          total_page: 10,
        },
      }
    },
  },
] as MockMethod[]
