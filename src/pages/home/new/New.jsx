import React, { useState } from "react";
import style from "./New.module.scss";
import { useDispatch } from 'react-redux'
import { create } from '../../../store/reducers/memo'
import { useNavigate } from "react-router-dom";

const New = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()



  const [form, setForm] = useState({
    pt: '',
    task: '',
    bj:'',
    bjBack: '',
    yj: '',
    yjBack: '', 
    remark: ''
  })

  const changeForm = (key, val) => {
    setForm({...form, [key]: val})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.pt || !form.task ) {
      alert("请填写所有必填字段");
      return;
    }
    //把数据存进去
    dispatch(create(form))
    alert('创建成功')
    navigate('/home/memo')
  };

  return (
    <div>
      <div className={style.header}>
        <div className={style.top}>任务备忘录</div>
        <form>
          <div className={style.bar1}>
            <span>平台</span>
            <p>
              <input
                type="radio"
                name="platform"
                value="淘宝"
                onChange={e =>changeForm('pt',e.target.value)}
              />
              淘宝
            </p>
            <p>
              <input
                type="radio"
                name="platform"
                value="京东"
                onChange={e =>changeForm('pt',e.target.value)}
              />
              京东
            </p>
            <p>
              <input
                type="radio"
                name="platform"
                value="拼多多"
                onChange={e =>changeForm('pt',e.target.value)}
              />
              拼多多
            </p>
          </div>
          <div className={style.bar2}>
            <p htmlFor="task">
              任务
              <input type="text" value={form.task} onChange={e =>changeForm('task',e.target.value)} />
            </p>
          </div>
          <div className={style.bar3}>
            <p>
              本金
              <input type="number" value={form.bj} onChange={e =>changeForm('bj',Number(e.target.value))} />元
              <input type="checkbox" value={form.bjBack} onChange={e =>changeForm('bjBack',e.target.checked)}/>本金已返
            </p>
          </div>
          <div className={style.bar4}>
            <p>
              佣金
              <input type="number" value={form.yj} onChange={e =>changeForm('yj',Number(e.target.value))} />元
              <input type="checkbox" value={form.yjBack} onChange={e =>changeForm('yjBack',e.target.checked)}/>佣金已返
            </p>
          </div>
          <div className={style.bar5}>
            <p>
              备注
              <input type="text" placeholder='输入备注，没有可不写' onChange={e =>changeForm('remark',e.target.value)}/>
            </p>
          </div>
          <div className={style.submit} onClick={handleSubmit}>
            提交
          </div>
        </form>
      </div>
      {/* {JSON.stringify(form)} */}
    </div>
  );
};

export default New;