import {CatalogBTN} from '../btns/btns'
import { Search } from "../search/Search";
import { Menu } from "../menu/Menu";
import logo from '../../../img/logo.svg'


export const Header = () => {
  return(
    <header className='header'>
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>
      <CatalogBTN>Каталог</CatalogBTN>
      <Search />
      <div className="search"></div>
      <Menu />
      <nav className="nav">
        
      </nav>
    </header>
  )
}