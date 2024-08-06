import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import style from './Detail.module.scss'
import { useParams, Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { remove, update } from '../../store/reducers/memo'



const Detail = () => {
  const params = useParams()
  const dispatch = useDispatch()
  // console.log(params)
  const info = useSelector(state => { 
    return state.memo.memoList.find(v => v.id === Number(params.id)) || {} 
  })
  // console.log(info)
  const [copyInfo, setCopyInfo] = useState({...info})
  if (!info) {
    return <Navigate to='/'/>
  }

  const goBack = () => {
    window.history.back()
  }

  const del = () => {
    if(window.confirm('确定要删除吗？')) {
      // 删除store中对应的数据
      dispatch(remove(info.id))
      window.history.back()
    }
  }
  const save = () => {
    dispatch(update(copyInfo))
    window.history.back()
  }
  
  
  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <div className={style.top}>
          <span onClick={goBack}>返回</span>
          <p>任务备忘录</p>
        </div>
      </div>
      
      <div className={style.detail}>
        <p>任务编号:第{copyInfo.num}个任务</p>
        <div className={style.content}>
          <div className={style.title}>
            <b>{copyInfo.task}</b>
            <span>{copyInfo.pt}</span>
          </div>
        </div>
        <div className={style.money}>
          <div>支付本金{copyInfo.bj}元</div>
          <div className={style.switch}>
            {copyInfo.bjBack ? '已返' : '未返'}
            <p className={classNames({ [style.active]: copyInfo.bjBack})} onClick={() => {
              setCopyInfo({
                ...copyInfo,
                bjBack: !copyInfo.bjBack
              })
            }}><span></span></p>
          </div>
        </div>
        <div className={style.money}>
          <div>支付佣金{copyInfo.yj}元</div>
          <div className={style.switch}>
          {copyInfo.yjBack ? '已返' : '未返'}
          <p className={classNames({ [style.active]: copyInfo.yjBack})} onClick={() => {
            setCopyInfo({
              ...copyInfo,
              yjBack: !copyInfo.yjBack
            })
          }}><span></span></p>
          </div>
        </div> 
        <button onClick={save}>保存</button>
        <button onClick={del}>删除</button>

      </div>
    </div>
  )
}

export default Detail