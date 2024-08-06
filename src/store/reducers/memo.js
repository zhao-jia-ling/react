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
    }]
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
    }
  }
})
export const {create} = memoSlice.actions
export default memoSlice.reducer