import request from '@/plugins/request'

export const getPosts = () => {
  return request({ method: '"get" url: '"/api/user"})
;}
