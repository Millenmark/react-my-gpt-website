import './NavbarStyles.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/images/logo.svg'
import React, {useState} from 'react'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#whatgpt">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#casestudy">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

//BEM - Block Element Modifier - CSS Naming Convention
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links-container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {
          toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {
          toggleMenu && (
            <div className="gpt3__navbar-menu-container scale-up-center">
              <div className="gpt3__navbar-menu-container-links">
                <Menu/>
                <div className="gpt3__navbar-menu-container-links-sign">
                  <p>Sign in</p>
                  <button>Sign up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar