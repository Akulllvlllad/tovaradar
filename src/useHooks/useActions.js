import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGoods  } from "../store/slices/goods";
import { addItem, deleteItem } from '../store/slices/cart'


const useAppDispatch = () => useDispatch()
//====================================USE_ACTIONS================================================
const AllActions ={
  fetchGoods, 
  addItem,
  deleteItem
}

export const useActions = () => {
  
  const appDispatch = useAppDispatch()
  return bindActionCreators(AllActions, appDispatch)
}
