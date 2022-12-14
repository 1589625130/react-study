import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { ResponsePageResult } from './api'
import { ResponseData } from '@/typings'

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
    // statusCode: 403,
    response: (req): ResponsePageResult<CommentModel> => {
      const comments: Array<CommentModel> = []
      for (let i = 0; i < req.query.page_row; i++) {
        comments.push(createComment())
      }
      return {
        data: comments,
        code: 200,
        message: 'success',
        meta: {
          current_page: 1,
          page_row: 10,
          total: 100,
          total_page: 10,
        },
      }
    },
  },
  {
    url: '/api/comment',
    method: 'put',
    response: (): ResponseData<CommentModel> => {
      return {
        data: createComment(),
        code: 200,
        message: 'success',
      }
    },
  },
  {
    url: '/api/comment',
    method: 'post',
    response: (req): ResponseData<CommentModel> => {
      console.log({ req })
      return {
        data: createComment(),
        code: 200,
        message: 'success',
      }
    },
  },
] as MockMethod[]
