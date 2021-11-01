

import React from 'react'
import Anouncement from '../Component/Anouncement';
import Navbar from '../Component/Navbar';
import Slider from '../Component/Slider';
import Categories from '../Component/Categories';
import Newsletter from '../Component/Newsletter';
import Footer from '../Component/Footer';
import Products from '../Component/Products';
import Cart from './Cart';
import Prod from './Prod';
import ProdList from './ProdList';

const Home = () => {
    return (
        <div className="container">
            <Navbar/>
            <Anouncement/> 
            <Slider/>
            <Categories/>
            <Prod/>
            <Cart/>
            <ProdList/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home;