import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app_header app_wrapper section_padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading tittle="Chase the new flavour"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
    </div>
    <div className="app__wrapper_img">

    </div>

  </div>
);

export default Header;
