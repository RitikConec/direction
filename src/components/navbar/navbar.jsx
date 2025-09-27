import react from 'react';
import './navbar.css';
import logo_black from '../../assets/logo-black.png'
import logo_white from '../../assets/logo-white.png'
import night from '../../assets/night.png'
import day from '../../assets/day.png'
import search_w from '../../assets/search-w.png'
import search_b from '../../assets/search-b.png'

const Navbar = ({theme, setTheme}) => {
  
  const toggle_theme =() =>{
    theme == 'day' ? setTheme('night') : setTheme('day');
  }
  return(
    <div className="navbar">
      <img src={theme== 'day' ? logo_white : logo_black} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img src={search_w} alt="search_white"/>
        
      </div>
      <img onClick={()=>{toggle_theme()}} src={night} alt="night_mode" className="toggle-icon" />
    </div>
  )
}
export default Navbar;