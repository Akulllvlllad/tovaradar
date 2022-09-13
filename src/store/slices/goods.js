import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchGoods = createAsyncThunk(
  'goods/fetchGoods', async () => {
    const {data} = await  axios
    .get('https://fakestoreapi.com/products')
    return data
  }
)

export const counterSlice = createSlice({
  name: 'goods',
  initialState: {
    status: 'loading',
    state: []
  },
  reducers: {
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoods.fulfilled, (state, action) => {
      state.state = [...action.payload]
      
    })
    builder.addCase(fetchGoods.pending, (state, action) => {
     
      
    })
    builder.addCase(fetchGoods.rejected, (state, action) => {
     
      
    })
  },
})

// Action creators are generated for each case reducer function
export const {} = counterSlice.actions

export default counterSlice.reducer