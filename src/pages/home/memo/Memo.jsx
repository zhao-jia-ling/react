import React from 'react'
import style from './Memo.module.scss'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'



const Memo = () => {
  // 这里要用store里的数据 就在这里写
  const memoList = useSelector(state => state.memo.memoList)
  console.log(memoList)
  const navigate = useNavigate()

  return (

  <div className={style.memo}>
    {/* 有的话就渲染第二个页面，没有的话就渲染第一个页面 */}
    {memoList.length === 0 ?
      <div>
        <div className={style.header}>
          <div className={style.top}>任务备忘录</div>
        </div>
        <div className={style.content}>
          <p>你的备忘录空空如也，去创建一个吧~</p>
          <Link to='/home/new'>去创建</Link>
        </div>
      </div>
      :
      memoList.map(it => 
        <div className={style.row} key={it.id} onClick={()=> navigate(`/detail/${it.id}`)}>
          <h3>{it.task}</h3>
          <p>本金：{it.bj} 佣金：{it.yj}</p>
          <p>{new Date(it.id).toLocaleString()}</p>
        </div>
      )}
  </div>
  )
}

export default Memo