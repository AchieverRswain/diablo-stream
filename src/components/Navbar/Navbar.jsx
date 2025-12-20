import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logoxx.jpg'
import search__icon from '../../assets/search_icon.svg'
import bell__icon from '../../assets/bell_icon.svg'
import profile__img from '../../assets/cards/IMG_5895.PNG'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'

const Navbar = () => {

const navRef = useRef();


useEffect(() => {
window.addEventListener('scroll', () => {
  if (window.scrollY > 80) {
    navRef.current.classList.add('nav-dark');
  } else {
    navRef.current.classList.remove('nav-dark');
  }
})
}, []);

  return (
    <div ref={navRef} className='navbar'>
     <div className="navbar-left">
      <img src={logo} alt="9 Stream" className='logox' />
      <ul>
        <li>Home</li>
        <li>Animes</li>
        <li>Oldies</li>
        <li>Trending</li>
        <li>Channels</li>
      </ul>
     </div>
     <div className="navbar-right">
      <img src={search__icon} alt="" className='icons'/>
      <p>Children</p>
      <img src={bell__icon} alt="" className='icons'/>
      <div className="navbar-profile">
        <img src={profile__img} alt="" className='profile'/>
        <img src={caret_icon} alt="" />
        <div className="dropdown">
          <p onClick={()=>{
            logout()
          }}>Sign out of Diablo</p>
          
        </div>
      </div>
     </div>

    </div>
  )
}

export default Navbar
