import http from '@/plugins/http'

export const apiGetCommentList = async (params: {} = {}) => {
  return await http.request<ResponsePageResult<CommentModel>>({
    url: '/api/comment',
    method: 'get',
    params,
  })
}

export const apiEditComment = async (data: CommentModel) => {
  return await http.request<ResponseResult<CommentModel>>({
    url: '/api/comment',
    method: 'put',
    data,
  })
}
