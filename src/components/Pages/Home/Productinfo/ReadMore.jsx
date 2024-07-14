import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReadMore.css';

const ReadMore = () => {
    const location = useLocation();
    const navigate = useNavigate(); 

    if (!location.state || !location.state.product) {
        return <div>Loading...</div>;
    }

    const { product } = location.state;

    const handleMakeOffer = () => {
        navigate('/make-offer');
    };

    const handleChatRequest = () => {
        navigate('/chat-request');
    };
   
    const handlePayment = async () => {
        const razorpayKeyId = "rzp_test_Hv51InQ77moC4B"; 
        const amountInPaisa = parseFloat(product.price.replace('₹', '').replace('/kg', '').replace(',', '')) * 100;

        const options = {
            key: razorpayKeyId,
            amount: amountInPaisa,
            currency: "INR",
            name: "Waste Management Platform",
            description: `Payment for ${product.title}`,
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            },
            prefill: {
                name: "Customer Name",
                email: "customer@example.com", 
                contact: "9219251196" 
            },
            notes: {
                address: "Corporate Office" 
            },
            theme: {
                color: "#3399cc"
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <div className="read-more">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details2">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Category: {product.category}</p>
                <p>Available: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                <p>Location: {product.location}</p>
                <p>Contact: {product.contactNo}</p>
                <div className="buttons">
                    <button onClick={handleMakeOffer}>Make Offer</button>
                    <button onClick={handleChatRequest}>Chat / Request Pickup</button>
                    <button onClick={handlePayment} className='paymentbtn'>Payment</button>
                </div>
            </div>
        </div>
    );
};

export default ReadMore;
