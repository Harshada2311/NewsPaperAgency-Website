import React from 'react';
import '../CSS/PricingPage.css';
import Footer from './Footer';

const pricingData = [
  { name: 'Times of India', price: 180 },
  { name: 'Lokmat', price: 150 },
  { name: 'Indian Express', price: 200 },
  { name: 'Sakal', price: 160 },
  { name: 'Maharashtra Times', price: 170 },
  { name: 'Hindustan Times', price: 190 },
  { name: 'Economic Times', price: 220 },
  { name: 'Business Standard', price: 210 },
  { name: 'The Hindu', price: 180 },
  { name: 'Deccan Herald', price: 175 },
];

export default function Pricing() {
  return (
    <>
    <div className="pricing-container">
      <h2 className="pricing-title">Subscription Pricing</h2>
      <p className="pricing-subtitle">Affordable newspaper delivery at your doorstep every morning.</p>

      <div className="pricing-table">
        <div className="pricing-header">
          <span>Newspaper</span>
          <span>Monthly Charge (₹)</span>
        </div>

        {pricingData.map((item, index) => (
          <div className="pricing-row" key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
    <Footer />  
    </>
  );
}
