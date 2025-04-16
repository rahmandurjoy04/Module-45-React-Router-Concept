import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='flex justify-center'>
                <SideBar></SideBar>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Root;