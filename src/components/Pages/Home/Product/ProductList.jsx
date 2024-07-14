import React from 'react';
import Product from './Product';
import './Product.css';

// Assuming you have images named img1.jpg to img11.jpg in your assets folder
import img1 from '../../../../assets/1.jpg';
import img2 from '../../../../assets/2.jpg';
import img3 from '../../../../assets/3.jpg';
import img5 from '../../../../assets/5.jpg';
import img6 from '../../../../assets/6.jpg';
import img7 from '../../../../assets/7.jpg';
import img8 from '../../../../assets/8.jpg';
import img9 from '../../../../assets/9.jpg';
import img10 from '../../../../assets/10.jpg';
import img11 from '../../../../assets/11.jpg';

export const products = [
    {
        id: 1,
        title: 'Plastic Bottles',
        description: 'Recyclable plastic bottles suitable for reuse or recycling.',
        price: '₹12.50/kg',
        category: 'Plastic',
        image: img1,
        contactNo: '+91 98765 43210',
        location: 'Mumbai, Maharashtra'
    },
    {
        id: 2,
        title: 'Cardboard Boxes',
        description: 'Sturdy cardboard boxes for packaging and recycling purposes.',
        price: '₹15.75/kg',
        category: 'Cardboard',
        image: img2,
        contactNo: '+91 98765 43211',
        location: 'Delhi'
    },
    {
        id: 3,
        title: 'Scrap Metal',
        description: 'Assorted scrap metal pieces, perfect for recycling into new materials.',
        price: '₹18.25/kg',
        category: 'Metal',
        image: img3,
        contactNo: '+91 98765 43212',
        location: 'Bangalore, Karnataka'
    },
    {
        id: 4,
        title: 'Glass Jars',
        description: 'Glass jars suitable for repurposing or recycling.',
        price: '₹13.75/kg',
        category: 'Glass',
        image: img5,
        contactNo: '+91 98765 43213',
        location: 'Chennai, Tamil Nadu'
    },
    {
        id: 5,
        title: 'Electronic Waste',
        description: 'Broken or outdated electronic devices for recycling valuable components.',
        price: '₹20.00/kg',
        category: 'Electronics',
        image: img6,
        contactNo: '+91 98765 43214',
        location: 'Hyderabad, Telangana'
    },
    {
        id: 6,
        title: 'Textile Waste',
        description: 'Discarded textile materials that can be repurposed or recycled.',
        price: '₹16.50/kg',
        category: 'Textile',
        image: img7,
        contactNo: '+91 98765 43215',
        location: 'Kolkata, West Bengal'
    },
    {
        id: 7,
        title: 'Plastic Bags',
        description: 'Disposable plastic bags suitable for recycling efforts.',
        price: '₹11.25/kg',
        category: 'Plastic',
        image: img8,
        contactNo: '+91 98765 43216',
        location: 'Pune, Maharashtra'
    },
    {
        id: 8,
        title: 'Paper Waste',
        description: 'Mixed paper waste ready for recycling into new paper products.',
        price: '₹12.50/kg',
        category: 'Paper',
        image: img9,
        contactNo: '+91 98765 43217',
        location: 'Ahmedabad, Gujarat'
    },
    {
        id: 9,
        title: 'Aluminum Cans',
        description: 'Empty aluminum beverage cans, perfect for recycling.',
        price: '₹13.75/kg',
        category: 'Metal',
        image: img10,
        contactNo: '+91 98765 43218',
        location: 'Jaipur, Rajasthan'
    },
    {
        id: 10,
        title: 'Organic Waste',
        description: 'Biodegradable organic waste suitable for composting or recycling.',
        price: '₹11.50/kg',
        category: 'Organic',
        image: img11,
        contactNo: '+91 98765 43219',
        location: 'Lucknow, Uttar Pradesh'
    }
];




const ProductList = ({ filteredProducts }) => {
    return (
        <div className="product-list">
            {filteredProducts.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
