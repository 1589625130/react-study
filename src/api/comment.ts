import request from '@/plugins/request'
import { CommentModel, RequestParams } from '@/typings'

export const apiGetCommentList = async (params: RequestParams) => {
  return await request<Array<CommentModel>>({
    url: '/api/comment',
    method: 'get',
    params,
  })
}

export const apiEditComment = async (data: CommentModel) => {
  return await request<CommentModel>({
    url: '/api/comment',
    method: 'put',
    data,
  })
}

export const apiAddComment = async (data: CommentModel) => {
  return await request<CommentModel>({
    url: '/api/comment',
    method: 'post',
    data,
  })
}
