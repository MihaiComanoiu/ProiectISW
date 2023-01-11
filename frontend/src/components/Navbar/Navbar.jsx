import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'

import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'

import images from '../../constants/images'

import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <Link to='/'>Home</Link>
        </li>
        <li className='p__opensans'>
          <Link to='/menu'>Menu</Link>
        </li>
        <li className='p__opensans'>
          <Link to='/login'>Sign Up</Link>
        </li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>
          <Badge badgeContent={1} color='primary'>
            <ShoppingCartOutlined />
          </Badge>
        </a>
        <div />
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='#fff'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
            />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'>
                <a href='#home'>Home</a>
              </li>
              <li className='p__opensans'>
                <a href='#about'>Menu</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar
