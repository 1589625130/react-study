//请求响应结构
export interface ResponseResult<T> {
  data: T
  code: number
  msg: string
}

//分页请求响应结构
export interface ResponsePageResult<T> {
  data: Array<T>
  meta: {
    current_page: number
    page_row: number
    total: number
    total_page: number
  }
}
