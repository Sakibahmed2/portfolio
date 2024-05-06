import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import "./Skills.css";

const SkillsTiles = ({ icon, title }) => {
  return (
    <Tilt>
      <JackInTheBox className="tech-icons flex justify-center items-center">
        <div className="flex flex-col items-center ">
          <div>{icon}</div>
          <p className="text-lg text-gray-300">{title}</p>
        </div>
      </JackInTheBox>
    </Tilt>
  );
};

export default SkillsTiles;
