import react from "react";

import {Slick} from './components/common/slider/Slick'

import {Header} from './components/common/Header/Header'
import './scss/app.scss';

import {useActions} from './useHooks/useActions'


function App() {
  const {fetchGoods} = useActions()
  react.useEffect(() =>{
    fetchGoods()
  }, [])
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header  />
        <Slick />

      </div> 
    </div>
  );
}




export default App;
