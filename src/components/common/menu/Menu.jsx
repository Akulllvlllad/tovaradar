import userPNG from '../../../img/User.png'
import basketPNG from '../../../img/Basket.png'
import likePNG from '../../../img/like.png'
import shopPNG from '../../../img/shop.png'
import css from './menu.module.scss'

const itemsMenu = [
  {img: userPNG, name: 'Войти', count: 1},
  {img: basketPNG, name: 'Заказы', count: 6},
  {img: likePNG, name: 'Избранное', count: 2},
  {img: shopPNG, name: 'Корзина', count: 5},
]

export const Menu = () => {
  return(
    <ul className={css.root}>
      {
        itemsMenu.map((obj, index) => (
          <li className={css.item} key={obj.name}>
            <div className={css.itemImg}>
              <img src={obj.img}/>
              <div className={css.itemCounter}>{obj.count ? obj.count : ''}</div>
            </div>
          <h5>{obj.name}</h5> 
        </li>
        ))
      }
      
      
    </ul>
  )
}