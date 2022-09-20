import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        result: {
          name: Mock.Random.cname(),
          age: Mock.Random.string(5, 10),
        },
      }
    },
  },
] as MockMethod[]
