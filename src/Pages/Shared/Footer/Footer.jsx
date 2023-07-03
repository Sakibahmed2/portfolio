import { FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="footer footer-center p-10  rounded w-full bg-black shadow-lg bg-opacity-40 text-white mt-12">
            <div className="grid grid-flow-col text-md md:text-lg gap-4">
                <Link to='/about' className='link link-hover'>About me</Link>
                <Link to='/projects' className='link link-hover'>Projects</Link>
                <Link to='/contact' className='link link-hover'>Contact me</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <ul className="flex justify-center items-center gap-8 mt-8">
                        <li className='text-3xl '>
                            <Link to='https://github.com/Sakibahmed2'> <AiFillGithub /> </Link>
                        </li>
                        <li className='text-3xl '>
                            <Link to='https://www.linkedin.com/in/sakib-ahmed-loskor/'> <FaLinkedinIn /> </Link>
                        </li>
                        <li className='text-3xl '>
                            <Link to='https://www.instagram.com/sakib_ahmed_47/'> <AiFillInstagram /> </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='text-md md:text-lg'>
                <p>Copyright © 2023 Sakib </p>
            </div>
        </footer>
    );
};

export default Footer;