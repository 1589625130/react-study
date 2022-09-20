interface Response<T> {
  data: T
  code: number
  message: string
  meta?: {
    current_page: number
    page_row: number
    total: number
    total_page: number
  }
}

//请求响应结构
interface ResponseResult<T> {
  data: T
  code: number
  msg: string
}

//分页请求响应结构
interface ResponsePageResult<T> {
  data: Array<T>
  meta: {
    current_page: number
    page_row: number
    total: number
    total_page: number
  }
}
