import React from 'react';
import App from './App';
import { Outlet } from 'react-router';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        <div>
           <Navbar></Navbar>

            <Toaster></Toaster>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;