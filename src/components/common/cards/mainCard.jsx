import React from 'react';
import css from './index.module.scss'
import {MainBTN} from '../btns/btns'
import {NewBillet, SellBillet} from '../btns/newAndSell'


export const MainCard = ({image, price, title, count, id}) => {
  const [like, setLike] = React.useState(false)
  return (
    <div className={css.root}>
      <div className={css.like}>
        {count < 100 && <NewBillet/>}
        {count > 400  && <SellBillet/>}
        <svg onClick={() => setLike(prev => !prev)} width="40" height="34" viewBox="0 0 20 17" fill={like ? "red": "none"} xmlns="http://www.w3.org/2000/svg">
            <path d="M14.0909 1C12.3825 1 10.8791 1.84316 10 3.12092C9.12086 1.84316 7.61745 1 5.90909 1C3.19805 1 1 3.12092 1 5.73684C1 11.2632 7.54545 14.0263 10 16C12.4545 14.0263 19 11.2632 19 5.73684C19 3.12092 16.802 1 14.0909 1Z" stroke="#B9B9B9" strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>  
      </div>

      <div className={css.img}>
        <img  src={image} alt='ТОВАР'/>
      </div>
      <div className={css.price}>{`от ${price} $`}</div>
      <div className={css.description}>{title}</div>
      <MainBTN id={id}>Купить</MainBTN>
    </div>
  )

}