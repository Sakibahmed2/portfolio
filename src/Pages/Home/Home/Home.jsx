import React, { useEffect } from "react";
import Type from "./Type";
import bannerImg from "../../../assets/update-nerw.png";
import style from "./Home.css";
import Introduce from "../Introduce/Introduce";
import { Slide } from "react-awesome-reveal";
import { FaListAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className="max-w-screen-xl home-banner mx-auto md:pt-8 pt-20 overflow-hidden">
      <div className="h-[720px] w-full max-w-[331px] md:max-w-[531px] bg-[#cd24b4] rounded-full absolute  translate-x-[-50%] rotate-45 blur-[90px] opacity-20"></div>

      <section className="md:flex h-screen justify-center items-center mx-auto">
        <Slide cascade damping={0.1}>
          <div className="mx-4 md:mx-0 text-center md:text-start">
            <span className="text-2xl md:text-4xl text-white">
              Hi there
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </span>
            <h2 className="text-3xl md:text-5xl text-white mt-8">
              I"M <span className="primary-text">SAKIB AHMED LOSKOR</span>
            </h2>
            <div className="mt-5">
              <Type />
            </div>
            <button className="custom-btn mt-2">
              <a
                href="Sakib ahmed loskor resume.pdf"
                download="Sakib ahmed loskor resume.pdf"
                className="flex items-center gap-2"
              >
                <span>
                  <FaListAlt />
                </span>
                Resume
              </a>
            </button>
          </div>
        </Slide>
        <Slide direction="right">
          <img
            className="w-80 mx-auto md:mx-0 md:w-[400px]"
            src={bannerImg}
            alt=""
          />
        </Slide>
      </section>

      {/* Introduce section */}
      <Introduce />
    </div>
  );
};

export default Home;
