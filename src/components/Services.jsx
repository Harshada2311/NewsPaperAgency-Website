import React from 'react';
import '../CSS/Service.css'

const services = [
  {
    title: 'Daily Newspaper Delivery',
    description: 'We ensure early morning delivery of your favorite newspapers, every day, right to your doorstep.',
    image: 'https://media.istockphoto.com/id/522453602/photo/its-good-to-be-curious.jpg?s=612x612&w=0&k=20&c=IFnRnSLq3Q3PesYjYdCxbiOSJ2_IXMvVlgKJNns6G2g='
  },
  {
    title: 'Flexible Subscriptions',
    description: 'Choose daily, weekly, or monthly plans based on your reading preferences and schedule.',
    image: 'https://media.istockphoto.com/id/1343868876/vector/print-newspaper-or-subscription-offered.jpg?s=612x612&w=0&k=20&c=67Iq8PkrYhqtYmkNxrjleBXobxHQ74SA8rJjy9XP4Es='
  },
  {
    title: 'Pause/Resume Anytime',
    description: 'Going out of town? Pause and resume your subscription instantly via call or online.',
    image: 'https://media.istockphoto.com/id/2165838948/photo/pause-wording-or-text-on-small-piece-of-hard-white-plastic-with-blue-background-copy-space.jpg?s=612x612&w=0&k=20&c=rLZRXkiYQek7mu8gAmQeBb-_fe4EsM16KpdE8t1434E='
  },
  {
    title: 'Online Billing & Payments',
    description: 'View your bills and make payments digitally via UPI, wallet, or bank transfer.',
    image: 'https://media.istockphoto.com/id/949716906/photo/man-holding-credit-card-and-using-cell-phone-holding-credit-card-with-shopping-online.jpg?s=612x612&w=0&k=20&c=Xe33rnshiQDu86rPIjbdUjWgbGvg0vaOAYYztfsoxA8='
  },
  {
    title: 'Bulk Delivery for Offices',
    description: 'Specialized service for commercial buildings, hostels, and housing societies with bulk order discounts.',
    image: 'https://media.istockphoto.com/id/933454588/photo/a-stack-of-old-newspapers-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=Jv3cfgtumg6DSNNfiMPchqIxkfvw8MuZ41WuqbZ2xjM='
  },
  {
    title: 'Pamphlet and Flyer Distribution',
    description: 'We also offer distribution services for pamphlets, flyers, and other promotional materials.',
    image: 'https://media.istockphoto.com/id/1165344744/photo/flu-vaccine-flyer.jpg?s=612x612&w=0&k=20&c=yVdlv5ltaXHmEKQXYnQ8LeW9TIOwRNnTNHUsuese3mA='
  },
  {
    title: 'Magazine Distribution and Delivery',
    description: 'We deliver popular magazines like India Today, Outlook, and more to your doorstep.',
    image: 'https://media.istockphoto.com/id/528812659/photo/popular-scientific-magazine-issued-by-russian-science-festival.jpg?s=612x612&w=0&k=20&c=gCXg49RQDKcvzEbKA0FanAgejy-Qonjn3Kr4JBzmstI='
  }
];

const Services = () => {
  return (
    <>
      <section className="services-hero">
        <h1>Our Services</h1>
        <p>Trusted, Timely & Tailored Newspaper Delivery Solutions</p>
      </section>

      <section className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </section>
      {/* <section className="distribution-area">
  <h2>Our Newspaper Distribution Areas</h2>
  <ul>
    <li>Pune University</li>
    <li>Ganesh Khind Road</li>
    <li>NCL Colony, Pashan</li>
    <li>Abhimanshree Society</li>
    <li>Baner Pashan Link Road</li>
    <li>Sus Road Pashan</li>
    <li>Aundh Baner Link Road</li>
    <li>Balaji Chowk, Pashan</li>
  </ul>
</section> */}

    </>
  );
};
export default Services;
