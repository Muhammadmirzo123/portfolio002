import React from 'react'
import './Hero.css'
import profile_img from '../../assets/hacker_photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1> <span>I'm Zekto,</span> fullstack developer based in Uzbekistan.</h1>
      <p>I'm a fullstack developer from Namangan,Uzbekistan with 2 years of experience in multiple companies like Microsoft,Tesla and Apple.</p>
      <div className="hero-action">
        <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}></p> Connect With Me </AnchorLink> </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
