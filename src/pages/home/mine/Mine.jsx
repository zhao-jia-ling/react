import React,{useMemo} from 'react'
import style from './Mine.module.scss'
import { useSelector } from 'react-redux'


const Mine = () => {
  const memoList = useSelector(state => state.memo.memoList)
  // 用计算属性
  const total = useMemo( () => {
    const t = {
      bj1: 0,
      bj2: 0,
      yj1: 0,
      yj2: 0
    }
    memoList.forEach(it => {
      if (it.bjBack) {
        t.bj1 += it.bj
      } else {
        t.bj2 += it.bj
      }
      if (it.yjBack) {
        t.yj1 += it.yj
      } else {
        t.yj2 += it.yj
      }

    })
    return t
  }, [memoList])

  return (
    <div>
      <div className={style.header}>
        <div className={style.top}>任务备忘录</div>
        <div className={style.get}>获取头像昵称</div>

        <div className={style.bottom}>
          <div className={style.line}>
            <p>您已做过1个任务</p>
            <p>超过全国30.0%的人</p>
          </div>

          <div className={style.bar}>
            <p>{total.bj1}<span>本金已返</span></p>
            <p>{total.bj2}<span>本金未返</span></p>
            <p>{total.yj1}<span>佣金已返</span></p>
            <p>{total.yj2}<span>佣金未返</span></p>
          </div>
        </div>

      </div>

      <div className={style.about}>
        <p>关于我们</p>
        <p>意见反馈</p>
        <p>进任务群</p>
      </div>

      <p className={style.footer}>只有登上山顶，才能看到那边的风光</p>
    </div>
  )
}

export default Mine