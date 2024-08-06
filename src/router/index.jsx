import {
  Navigate, // 重定向组件
} from 'react-router-dom'
import Auth from '../hoc/Auth'

import Home from '../pages/home/Home'
import Detail from '../pages/detail/Detail'
import Login from '../pages/login/Login'
import Memo from '../pages/home/memo/Memo'
import Mine from '../pages/home/mine/Mine'
import New from '../pages/home/new/New'



const routes= [
  {
    path: '/',
    element: <Navigate to="/home/mine" />
  },
  {
    path: '/home',
    element: <Home/>,
    isAuth: true,
    title:'首页',
    children: [
      {
        path: '/home/memo',
        element:<Memo />,
        title:'备忘录'
      },
      {
        path: '/home/new',
        element:<New />,
        title:'新增'
      },
      {
        path: '/home/mine',
        element:<Mine />,
        title:'我的'
      }
    ]
  },
  {
    path:'/detail/:id',
    element:<Detail />,
    isAuth: true,
    title:'详情页'
  },
  {
    path:'/login',
    element: <Login />,
    title:'登录'
  },
  {
    path: '*',
    element:<div>404,页面找不到啦</div>
  }
]

const RouteRender = (props) => {
  document.title = props.title
  return props.children
}


const formatRoutes = (routes) => {
  if (!Array.isArray(routes)) return []
  return routes.map(item => {
    return {
      ...item,
      element: (
        <RouteRender title={item.title}>
          <Auth isAuth={item.isAuth}>
            {item.element}
          </Auth>
        </RouteRender>
      ),
      // 递归
      children: formatRoutes(item.children)
    }
  })
}



export default formatRoutes(routes)