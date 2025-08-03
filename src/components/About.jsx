import React from 'react';
import '../CSS/about.css';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
     <section class="about-hero">
    <div class="about-hero-content">
      <h1>About Our Newspaper Agency</h1>
      <p>Delivering trusted news every morning to your doorstep.</p>
    </div>
  </section>

   {/* <!-- About Us Content Section - */}
  <section class="about-main">
    <div class="about-container">
      <div class="about-text">
        <h2>Who We Are</h2>
        <p>
          Founded in 2001, our Newspaper Agency has been committed to bringing the latest and most accurate news to communities across the region.
          We specialize in delivering a wide range of newspapers, journals, and magazines to homes and businesses with consistency and care.
        </p>

        <h2>Our Mission</h2>
        <p>
          To inform, inspire, and empower readers by providing timely and truthful journalism. We believe in the power of informed communities
          and work diligently to make the news accessible and reliable for everyone.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>✅ Timely daily deliveries</li>
          <li>✅ Wide range of newspapers and magazines</li>
          <li>✅ Easy subscription & cancellation</li>
          <li>✅ Personalized customer service</li>
          <li>✅ Eco-friendly packaging</li>
        </ul>
      </div>

      <div class="about-image">
        <img src="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg" alt="Newspaper Delivery" />
      </div>
    </div>
  </section>
  <footer class="about-footer">
    <Footer/>
    </footer>
    </>
    //  <!-- Hero Section -->
 
  );
};

export default About;
