import { Menu } from 'antd'
import { FC, ReactElement } from 'react'
import useRoute from '@/hooks/useRoute'
import { useLocation, useNavigate } from 'react-router-dom'

const getRoutePath = (path: Array<string>): string => {
  let routePath = ''
  path.forEach((item) => {
    if (item !== '/') routePath += `${item}`
  })
  return routePath
}

export const GlobalMenu: FC = (): ReactElement => {
  const { route } = useRoute()
  const navigate = useNavigate()
  const location = useLocation()
  console.log({ location })
  const clickMenu = (item) => {
    console.log(item)
    navigate(getRoutePath(item.keyPath.reverse()), { replace: false })
  }
  return (
    <Menu
      mode="inline"
      onClick={(item) => {
        clickMenu(item)
      }}
      items={route}></Menu>
  )
}
