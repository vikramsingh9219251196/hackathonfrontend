import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Waste Management Platform</h1>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Revolutionizing waste management by connecting ragpickers with users, 
          promoting recycling, and creating a cleaner, sustainable environment.
        </p>
      </section>

      <section className="importance">
        <h2>Why It Matters</h2>
        <ul>
          <li>Reduces environmental pollution</li>
          <li>Supports ragpickers' livelihoods</li>
          <li>Promotes a circular economy</li>
          <li>Increases waste segregation awareness</li>
        </ul>
      </section>

      <section className="join-us">
        <h2>Join Our Mission</h2>
        <p>
          Be part of the solution. Together, we can create 
          a cleaner, sustainable future for our communities.
        </p>
        <button className="cta-button">Get Started Now</button>
      </section>
    </div>
  );
};

export default About;