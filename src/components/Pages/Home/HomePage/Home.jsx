import React, { useState } from 'react';
import Navbar from '../NavBar/Navbar';
import ProductList from '../Product/ProductList';
import Footer from "../Footer/Footer";
import { products } from '../Product/ProductList';
import Banner from "../Banner/Banner"
import About from '../About/About';

const Home = () => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleSearch = (searchTerm) => {
        const filtered = products.filter(product =>
            product.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <Navbar handleSearch={handleSearch} />
            <Banner/>
            <About/>
            <ProductList filteredProducts={filteredProducts} />
            <Footer />
        </>
    );
};

export default Home;
