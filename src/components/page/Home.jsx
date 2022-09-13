import {MainCard} from '../common/cards/mainCard'
import { useSelector } from "react-redux";
import {Slick} from '../common/slider/Slick'



export const Home = () => {
  const {state} = useSelector(state => state.goods)
  return (
    <>
      <Slick />
      <div className='Home'>
        {state.map((obj, index) =><MainCard 
          key={obj.id} 
          image={obj.image} 
          price={obj.price} 
          title={obj.title} 
          count={obj.rating.count}
          id={obj.id}
        />)}
      </div>
       
    </>
  )
}