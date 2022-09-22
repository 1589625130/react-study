import _ from 'lodash'

const env: any = _.cloneDeep(import.meta.env)

Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
  if (value === 'true' || value === 'false') {
    env[key] = value == 'true'
  } else if (/^\d+$/.test(value)) {
    env[key] = Number(value)
  } else if (value === 'null') {
    env[key] = null
  } else if (value === 'undefined') {
    env[key] = undefined
  }
})

interface MetaEnv extends ImportMetaEnv {
  VITE_APP_TITLE: string //页面标题
  VITE_APP_BASE_API: string //接口地址
  VITE_MOCK_ENABLE: boolean //是否开启mock
  VITE_APP_ENV: string //环境变量
}

export default env as MetaEnv
