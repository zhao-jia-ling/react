import React, { Suspense }from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { 
  // 路由根组件， 所有和路由相关的内容必须在根组件内使用
  HashRouter, // hash模式
  BrowserRouter // history模式
} from 'react-router-dom' 

import store from './store/index'
import { Provider } from 'react-redux'// 连接 store 和组件

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // fallback: 异步组件加载中时显示的后备内容
  <Provider store={store}>
      <Suspense fallback={<div className='loading'>加载中...</div>}>
        <HashRouter>
          <App />
        </HashRouter>
      </Suspense>

  </Provider>


)


