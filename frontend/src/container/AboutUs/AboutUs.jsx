import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className = "app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div> 

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We are a respectable restaurant and we offer delicious, quality food at affordable prices. We look forward to welcoming you to our place!</p>
        <button type="button" className="custom__button">Know More</button>
      </div>  

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The restaurant was founded by our great-grandfather, old Gericht, and he left it to us as a family legacy. His wish was to carry on the family tradition and take care of this restaurant with joy and honor, which was the treasure of his life from which he earned his living and supported his family.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>  


    </div>
  </div>
);

export default AboutUs;
