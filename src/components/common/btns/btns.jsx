import React from "react"
import { useActions } from './../../../useHooks/useActions';
import { useSelector } from 'react-redux';




export const CatalogBTN = ({children}) => {
const [open, setOpen] = React.useState(false)


return(
  <>
  {open ? <button className='btn btn-catalog-off' onClick={() => setOpen(prev => !prev)}>
    <span>+</span>
    {children}
  </button> 
  :<button className='btn btn-catalog' onClick={() => setOpen(prev => !prev)}>
  <div className='btn-catalog__icon'>
    <p className='icon_line1'></p>
    <p className='icon_line2'></p>
    <p className='icon_line3'></p>
  </div>{children}</button>}
  </>
   
)}

  
export const MainBTN = ({id, children}) => {
  const {cart} = useSelector(state => state.cart)
  const {addItem, deleteItem} =useActions()
  
  return(
    <>
    {true
    ?<div className=" btn-main calc">
        <span >-</span>
        <p>{}</p>
        <span onClick={() => addItem(id)}>+</span>
      </div>
    :<button className='btn btn-main'>{children}</button>
    }
    </>
  )
}





