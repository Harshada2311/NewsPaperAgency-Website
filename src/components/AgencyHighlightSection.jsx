import React from 'react';
import '../CSS/AgencyHighlightSection.css';

const AgencyHighlightSection = () => {
  return (
    <section className="highlight-section">
      <div className="highlight-content">
        <div className="highlight-text">
          <p className="subtext">Your daily dose of news, delivered</p>
          <h2 className="headline">
            Fast, Trusted Newspaper<br />
            Delivery Across the City.
          </h2>
        </div>
        <div className="highlight-btn">
          <a href="#services" className="highlight-button">View Services</a>
        </div>
      </div>
      {/* ICON SERVICES SECTION */}
     <div className="icon-cards">
  <div className="icon-card">
    <img src="https://cdn-icons-png.flaticon.com/512/1256/1256650.png" alt="Subscription" className="card-icon" />
    <h3>Customized Subscriptions</h3>
    <p>
      Choose your preferred newspapers and delivery schedule based on your reading habits.
    </p>
  </div>
  <div className="icon-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2721/2721294.png" alt="Delivery" className="card-icon" />
    <h3>On-Time Delivery</h3>
    <p>
      We ensure early morning doorstep delivery, even on weekends and holidays.
    </p>
  </div>
  <div className="icon-card">
    <img src="https://cdn-icons-png.flaticon.com/512/2274/2274628.png" alt="Support" className="card-icon" />
    <h3>Pause & Support</h3>
    <p>
      Going on vacation? Pause your subscription anytime and resume with a click.
    </p>
  </div>
</div>

    </section>
    
  );
};

export default AgencyHighlightSection;
