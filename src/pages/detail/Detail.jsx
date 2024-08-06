import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from './Detail.module.scss'
import jd from '../home/img/jd.png'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Detail = () => {
  const params = useParams()
  console.log(params)
  const info = useSelector(state => state.memo.memoList.find(v => v.id === Number(params.id)))
  console.log(info)
  if (!info) {
    return <Navigate to='/'/>
  }
  
  
  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <div className={style.top}>
          <span>返回</span>
          <p>任务备忘录</p>
        </div>
      </div>
      
      <div className={style.detail}>
        <p>任务编号:第{info.num}个任务</p>
        <div className={style.content}>
          <div className={style.title}>
            <b>{info.task}</b>
            <span>{info.pt}</span>
          </div>
        </div>
        <button>保存</button>
        <button>删除</button>

      </div>
    </div>
  )
}

export default Detail