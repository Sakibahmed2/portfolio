import React from 'react';
import aboutImg from '../../../assets/about.png'
import { ImPointRight } from "react-icons/im";
import Skills from '../Skill/Skills';
import { Zoom } from 'react-awesome-reveal';




const About = () => {
    return (
        <div className='max-w-screen-lg mx-auto pt-28'>
            <h4 className='text-4xl text-white text-center mb-8 md:mb-0'>Who <span className='primary-text font-semibold'>I'M</span></h4>
            <div className='md:flex items-center justify-between mt-8'>
                <Zoom>
                    <div className='text-white text-xl mx-4 md:mx-0'>
                        <p>Hi Everyone, I am <span className='primary-text'>Sakib ahmed loskor</span> from <span className='primary-text'>Habiganj, Bangladesh. </span>
                            I am a first year student of diploma in CST.</p>

                        <p className='mt-6 mb-4'>Apart from coding, some other activities that I love to do!</p>
                        <ul>
                            <li className='flex items-center gap-3'> <ImPointRight /> Playing Games</li>
                            <li className='flex items-center gap-3'> <ImPointRight /> Travelling</li>
                            <li className='flex items-center gap-3'> <ImPointRight /> Photo editing</li>
                        </ul>
                    </div>
                </Zoom>


                <Zoom>
                    <img className='w-96 mt-8 md:mt-0' src={aboutImg} alt="" />
                </Zoom>
            </div>

            {/* Skills section */}

            <Skills />


        </div>
    );
};

export default About;