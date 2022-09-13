import React from "react"




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

  
export const MainBTN = ({children}) => {
  const [count, setCount] = React.useState(0)
  return(
    <>
    {count
    ?<div className=" btn-main calc">
        <span onClick={() => setCount(prev => prev - 1)}>-</span>
        <p>{count}</p>
        <span onClick={() => setCount(prev => prev + 1)}>+</span>
      </div>
    :<button className='btn btn-main' onClick={() => setCount(prev => prev + 1)}>{children}</button>
    }
    </>
  )
}





