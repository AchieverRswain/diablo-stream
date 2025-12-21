import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

import hero_title from "../../assets/hero_title.png";

import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src="/ben_10.JPG" alt="" className ='banner-img' />
        <div className="hero-caption">
            
            <p className='main_hero_caption'>Watch the Epic Adventure Now</p>
            <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt=""/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=""/>More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
               
                <TitleCards title="BlockBuster Movies"/>
                <TitleCards title = "New Releases" />
              
      </div>
                
      <Footer/>  
    </div>
    
  )
}

export default Home
