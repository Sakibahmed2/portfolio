import React from 'react';
import Particle from '../Particle/Particle';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <Particle />
            <NavBar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;