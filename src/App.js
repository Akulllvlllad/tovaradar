import react from "react";



import {Header} from './components/common/Header/Header'
import './scss/app.scss';

import {useActions} from './useHooks/useActions'

import {Home} from "./components/page/Home"
function App() {
  

  const {fetchGoods} = useActions()
  react.useEffect(() =>{
    fetchGoods()
  }, [])
  return (
    <div className='wrapper'>
      <div className='container'>
        <Header  />
        <Home />
        
        
      </div> 
    </div>
  );
}




export default App;
