import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'




const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <a href="https://www.facebook.com/rohan.swain.is.crazy.achiever" target="_blank" rel="noreferrer" className="icon-wrapper">
            <img src={facebook_icon} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/crazyachiever" target="_blank" rel="noreferrer" className="icon-wrapper">
            <img src={instagram_icon} alt="Instagram" />
        </a>
        <a href="https://x.com/RohanSwain16" target="_blank" rel="noreferrer" className="icon-wrapper">
            <img src={twitter_icon} alt="Twitter" />
        </a>
        <a href="https://youtube.com/@achievervnitnagpur-y5d?si=qRRmvUvcJDFzMZ38" target="_blank" rel="noreferrer" className="icon-wrapper">
            <img src={youtube_icon} alt="YouTube" />
        </a>
      </div>
      <ul>
        <li>Help Center</li>
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        
        
        </ul>
        <p className='copyright-text'>Made with ❤️ by @crazyachiever</p>
    </div>
  )
}

export default Footer
