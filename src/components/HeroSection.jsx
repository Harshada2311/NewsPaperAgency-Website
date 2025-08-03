import React from 'react';

import '../CSS/HeroSection.css'
import AgencyHighlightSection from '../components/AgencyHighlightSection.jsx';

//const heroImageUrl = "https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg";

const HeroSection = () => {
  return (
    <>
    <section className="hero-wrapper">
  <div className="hero-box">
    <div className="hero-image">
      <img
        src="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg"
        alt="Newspaper delivery"
      />
    </div>
    <div className="hero-content">
      <h1>Fast, Reliable <br /> Newspaper Delivery</h1>
      <p>
        At Shinde News Agency, we deliver top newspapers like Lokmat, Times of India,
        Sakal, and more every morning straight to your door — across Pune and PCMC.
      </p>
      <a href="#contact" className="hero-btn">Contact Now</a>
    </div>
  </div>
</section>
<section className="hero-highlight">
  <AgencyHighlightSection/>

  </section>
    </>
  

  );
};

export default HeroSection;
