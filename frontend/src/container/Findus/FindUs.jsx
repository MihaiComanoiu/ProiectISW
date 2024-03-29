import React from 'react';


import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading tittle="Contact"/>
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Adress: Flowers street, no. 23, Berlin, Germany</p>
        <p className="p__cormorant" style={{color: '#DCCA87', margin:'2rem 0'}}>Opening Hours:</p>
        <p className="p__opensans">Monday - Friday: 09:00 AM - 19:00 PM</p>
        <p className="p__opensans">Saturday - Sunday: 09:00 AM - 22: 00 PM</p>
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
