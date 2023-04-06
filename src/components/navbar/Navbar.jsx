import './NavbarStyles.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/images/logo.svg'
import React from 'react'

//BEM - Block Element Modifier - CSS Naming Convention
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <p><a href="#home">Home</a></p>
          <p><a href="#whatgpt">What is GPT3?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#casestudy">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar