import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import a from './img/memo.png'
import b from './img/new.png'
import c from './img/mine.png'
import style from './Home.module.scss'


const Home = () => {
  return (
    <div>
      <div className={style.content}>
        <Outlet />
      </div>
      <div className={style.footer}>

        <NavLink to="/home/memo" activeStyle={{ color: 'green' }}>
          <img src={a} alt="" />
          备忘录
        </NavLink>
        <NavLink to="/home/new" activeStyle={{ color: 'green' }}>
          <img src={b} alt="" />
          新增
        </NavLink>
        <NavLink to="/home/mine" activeStyle={{ color: 'green' }}>
          <img src={c} alt="" />
          我的
        </NavLink>

      </div>

    </div>
  )
}

export default Home