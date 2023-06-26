import React from 'react';
import Type from './Type';
import bannerImg from '../../../assets/DSC_2545.png_3-removebg-preview.png'
import style from './Home.css'
import Introduce from '../Introduce/Introduce';


const Home = () => {
    return (
        <div className='max-w-screen-xl home-banner mx-auto md:pt-24 pt-20'>
            <section className='md:flex  justify-center items-center mx-auto '>

            <div className='mx-4 md:mx-0'>
                <span className='text-2xl md:text-4xl text-white'>Hi there<span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                </span></span>
                <h2 className='text-3xl md:text-5xl text-white mt-8'>I"M <span className='primary-text'>SAKIB AHMED LOSKOR</span></h2>
                <div className='mt-5'>
                    <Type />
                </div>
            </div>
            <img className='w-80 mx-auto md:mx-0 md:w-[400px] image-bg' src={bannerImg} alt="" />
        </section>

            {/* Introduce section */ }
    <Introduce />

        </div >
    );
};

export default Home;