import React from 'react'
import { 
  useRoutes,
  Routes, // 路由的外层组件
  Route, // 配置路由组件
  Navigate, // 重定向组件
  Link, // 跳转，没有高亮类名
  NavLink // 跳转，自动添加高亮类名
} from 'react-router-dom'
import routeConfig from './router/index'


const App = () => {
  const routes = useRoutes(routeConfig)
  return (
    <div>
    
      {routes}

    </div>

  )
}

export default App