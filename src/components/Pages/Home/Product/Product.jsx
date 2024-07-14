import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const info = () => {
        navigate("/readmore", { state: { product } });
    };

    return (
        <div className="product">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={info}>Read more</button>
            </div>
        </div>
    );
};

export default Product;
