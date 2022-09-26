import type { RouteObject } from 'react-router-dom'

export interface RouterType extends RouteObject {
  children?: Array<RouterType>
  name: string
  isAuth?: boolean
  title?: string
}
