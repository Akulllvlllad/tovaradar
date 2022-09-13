import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGoods  } from "../store/slices/goods";



const useAppDispatch = () => useDispatch()
//====================================USE_ACTIONS================================================
const AllActions ={
  fetchGoods 
  
}

export const useActions = () => {
  
  const appDispatch = useAppDispatch()
  return bindActionCreators(AllActions, appDispatch)
}
