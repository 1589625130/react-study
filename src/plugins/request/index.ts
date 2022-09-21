import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { HttpEnum } from '@/enum/httpEnum'

const config: AxiosRequestConfig = {
  baseURL: '',
  timeout: 10000,
}

const https = axios.create(config)

https.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers = {
      Accept: 'application/json',
    }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  },
)

https.interceptors.response.use(
  (response) => {
    if (response.data?.message) {
      void message.success(response.data.message)
    }
    return response
  },
  (error) => {
    const {
      response: { status, data },
    } = error
    const { message } = data

    switch (status) {
      case HttpEnum.UNAUTHORIZED:
        // store.remove(CacheEnum.TOKEN_NAME);
        // void router.push({ name: RouteEnum.LOGIN });
        break
      case HttpEnum.BAD_REQUEST:
        // errorStore().setErrors(error.response.data.errors);
        break
      case HttpEnum.FORBIDDEN:
        message.error(message ?? '没有操作权限')
        break
      case HttpEnum.NOT_FOUND:
        // void router.push({ name: RouteEnum.NOT_FOUND });
        break
      case HttpEnum.TOO_MANY_REQUESTS:
        message.error(message ?? '请示过于频繁，请稍候再试')

        break
      default:
        if (message) {
          message.error(message ?? '服务器错误')
        }
    }
    return Promise.reject(error)
  },
)

async function request<T = any, D = ResponseData<T>>(config: AxiosRequestConfig): Promise<D> {
  return new Promise((resolve, reject) => {
    https
      .request<D>(config)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  }) as Promise<D>
}

export default request