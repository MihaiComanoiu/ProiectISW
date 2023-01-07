import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
   <div className="app__wrapper_img app__wrapper_img-reverse">
     <img src={images.chef} alt ="chef" />
   </div>

   <div className="app__wrapper_info">
     <SubHeading title="Chef's Word" />
     <h1 className="headtext__cormorant">What we believe in</h1>

     <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
We want them to fully enjoy all our services, and for the prestige of our restaurant to be known.</p>
        </div>
        <p className="p__opensans">For us, our clints is "Our Masters" and their wishes define all our activity. Our recipes have been composed with a lot of dedication and attention to have a menu as rich and delicious as possible.</p>
     </div>

     <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div> 
    
  </div>

);

export default Chef;
