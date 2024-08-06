import React, { useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

const Login = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', pass: '' })

  return (
    <div>
      <h1>Login</h1>
      <p>姓名: <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /></p>
      <p>密码: <input type="text" value={form.pass} onChange={e => setForm({ ...form, pass: e.target.value })} /></p>
      <button onClick={() => {
        if (form.name === 'admin' && form.pass === '123') {
          alert('登录成功')
          localStorage.setItem('token', 'token123')
          const redirectUrl = searchParams.get('redirectUrl') || '/'
          navigate(redirectUrl)
        } else {
          alert('用户名密码错误')
        }
      }}>登录</button>
    </div>
  )
}

export default Login