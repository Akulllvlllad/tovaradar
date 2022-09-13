import { configureStore } from '@reduxjs/toolkit'
import  goodsReducer from './slices/goods'
import cartReducer from './slices/cart'

export default configureStore({
  reducer: {
    goods: goodsReducer,
    cart: cartReducer
  },
})