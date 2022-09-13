import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'





export const counterSlice = createSlice({
  name: 'cart',
  initialState: {
    status: 'loading',
    cart: [],
    totalCount: 0,
  },
  reducers: {
   addItem(state, action){
    const findItem = state.cart.find(obj => obj.id === action.payload.id)
    if(findItem){
      findItem.count++
    }else{
      state.cart = [...state.cart, {...action.payload, count:1}]
    }
   },
   deleteItem(state, action){
    const findItem = state.cart.find(obj => obj.id === action.payload.id)
    if(findItem.count === 1){
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
    }else{
      findItem.count--
    }
    
   }
  },
 
})

// Action creators are generated for each case reducer function
export const {addItem, deleteItem} = counterSlice.actions

export default counterSlice.reducer