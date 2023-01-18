import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

import {Link} from 'react-router-dom'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading tittle="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>
Welcome to our restaurant! We hope you will be satisfied with our services and we wish you with all our heart "ENJOY YOUR MEAL!"</p>
      <Link to="/menu">
        <button type="button" className="custom__button">Explore Menu</button>
      </Link>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />

    </div>

  </div>
);

export default Header;
