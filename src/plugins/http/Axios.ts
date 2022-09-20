import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
// import { CacheEnum } from "../../enum/CacheEnum";
import { HttpEnum } from '@/enum/httpEnum'
// import { RouteEnum } from "../../enum/RouteEnum";

export default class Axios {
  private instance

  // private loading: any;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors()
  }

  public async request<T = CommentModel, D = Response<T>>(config: AxiosRequestConfig): Promise<D> {
    return new Promise(async (resolve, reject) => {
      try {
        // @ts-ignore
        const response = await this.instance.request<D>(config)
        resolve(response.data)
      } catch (error) {
        reject(error)
      }
    }) as Promise<D>
  }

  private interceptors() {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }

  private interceptorsRequest() {
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // this.loading =
        //   this.loading ??
        //   ElLoading.service({
        //     background: "rgba(255,255,255,0.1)",
        //   });
        // errorStore().resetError();
        config.headers = {
          Accept: 'application/json',
          // Authorization: `Bearer ${store.get(CacheEnum.TOKEN_NAME)}`,
          Authorization: `Bearer 1232`,
        }
        return config
      },
      (error: any) => {
        return Promise.reject(error)
      },
    )
  }

  private interceptorsResponse() {
    this.instance.interceptors.response.use(
      (response) => {
        // this.loading.close();
        if (response.data?.message) {
          void message.success(response.data.message)
        }
        return response
      },
      (error) => {
        // this.loading.close();
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
  }
}
