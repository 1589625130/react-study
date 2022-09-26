import { RouterType, routes } from '@/router'
import { useState } from 'react'
import type { MenuProps } from 'antd'

function filterRoute(routes: Array<RouterType>): MenuProps['items'] {
  return [] // return routes.map((item) => {
  //   let children: MenuProps['items'] = []
  //   if (item.children && item.children.length > 0) {
  //     children = filterRoute(item.children)
  //   }
  //   const obj = {
  //     key: item.path,
  //     label: item.title,
  //     children,
  //   }
  //   if (children?.length === 0) {
  //     delete obj.children
  //   }
  //   return obj
  // })
}

const useRoute = () => {
  const [show, setShow] = useState<boolean>(true)
  const route: MenuProps['items'] = filterRoute(routes)
  return {
    show,
    setShow,
    route,
  }
}

export default useRoute
