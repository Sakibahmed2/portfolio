import React from 'react';
import avatar from '../../../assets/avatar.svg'
import Tilt from 'react-parallax-tilt';
import style from './Introduce.css'
import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Introduce = () => {
    return (
        <section className='mt-32'>
            <h4 className='uppercase text-center text-white text-2xl md:text-4xl'>Let me <span className='primary-text'>introduce</span>myself</h4>

            <div className='md:flex justify-between max-w-screen-lg mx-4 md:mx-auto items-center mt-12 '>
                <div className='text-white text-xl md:w-9/12 leading-8 md:leading-[50px]'>
                    <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
                    <p>I am fluent in classics like <span className='font-semibold primary-text'>Javascript </span></p>
                    <p>My field of Interest's are building new <span className='font-semibold primary-text'> Web Technologies and Products </span></p>
                    <p>Whenever possible, I also apply my passion for developing products with <span className='font-semibold primary-text'>Node.js</span> and Modern Javascript Library and Frameworks  like <span className='font-semibold primary-text'>React.js and Next.js</span></p>
                </div>
                <Tilt tiltEnable>
                    <img className='mx-auto' src={avatar} alt="" />
                </Tilt>
            </div>


            {/* Find me section */}
            <div className='text-center mt-12 text-white'>
                <p className='text-4xl '>Find me on</p>
                <p className='text-lg'>Feel free to <span className='primary-text'>connect</span> with me</p>
                <div className='flex justify-center items-center'>
                    <ul className="flex justify-center items-center gap-8 mt-8">
                        <li className='bg-white rounded-full w-10 h-10 flex justify-center items-center primary-text text-2xl home-social-icons'>
                            <Link to='https://github.com/Sakibahmed2'> <AiFillGithub /> </Link>
                        </li>
                        <li className='bg-white rounded-full w-10 h-10 flex justify-center items-center primary-text text-2xl home-social-icons'>
                            <Link to='https://www.linkedin.com/in/sakib-ahmed-loskor/'> <FaLinkedinIn /> </Link>
                        </li>
                        <li className='bg-white rounded-full w-10 h-10 flex justify-center items-center primary-text text-2xl home-social-icons'>
                            <Link to='https://www.instagram.com/sakib_ahmed_47/'> <AiFillInstagram /> </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Introduce;