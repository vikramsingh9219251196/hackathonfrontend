import React from 'react';
import './Banner.css';
import bannerImage from '../../../../assets/banner10.jpg';

const Banner = () => {
    return (
        <div className="new-banner">
            <img src={bannerImage} alt="Banner" />
            <div className="new-banner-content">
                <h1>Connect with Rag Pickers</h1>
                <p>Join our platform to sell your waste products and contribute to a cleaner environment.</p>
                <button>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;
