import  { createSlice } from '@reduxjs/toolkit'


const memoSlice = createSlice({
  name: 'memo',
   //要存的数据
  initialState: {
    memoList: [{
      id: 1,
      num: 0,
      task:'第一个任务',
      pt: '淘宝',
      bj: 10,
      bjBack: false,
      yj: 20,
      yjBack: true,
      remark:'备注1111'
    },
    {
      id: 2,
      num: 1,
      task:'第二个任务',
      pt: '拼多多',
      bj: 20,
      bjBack: false,
      yj: 30,
      yjBack: true,
      remark:'备注2222'
    }
  ]
  },
  // 对数据的操作
  reducers: {
    create(state, { payload }) {
      // payload 里是传过来的数据
      console.log(1111,payload)
      state.memoList.unshift({
        id: Date.now(),
        no: state.memoList.length,
        ...payload
      })
    },
    remove(state, { payload }) {
      // 这里传的就是Id
      const index = state.memoList.findIndex(v => v.id === payload)
      state.memoList.splice(index, 1)
    },
    update(state, { payload }) {
      // 这里传的是对象
      const index = state.memoList.findIndex(v => v.id === payload.id)
      state.memoList.splice(index, 1, payload)
    }
  }
})
export const {create, remove, update} = memoSlice.actions
export default memoSlice.reducer