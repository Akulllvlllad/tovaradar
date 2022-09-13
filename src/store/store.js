import { configureStore } from '@reduxjs/toolkit'
import  goodsReducer from './slices/goods'
export default configureStore({
  reducer: {
    goods: goodsReducer,
  },
})