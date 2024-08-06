import React from 'react'
import { Navigate,useLocation } from 'react-router-dom'

// 守卫组件 谁用谁套useLocation返回一个对象，包含以下属性：

const Auth = (props) => {
  const token = localStorage.getItem('token')
  
  const location = useLocation()
  // console.log(location)

  if (props.isAuth) {
    if (!token) {
      return <Navigate to={`/login?redirectUrl=${encodeURIComponent(location.pathname)}`} />
    }
  }
  
  return props.children
}

export default Auth