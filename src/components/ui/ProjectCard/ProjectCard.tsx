import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  console.log(project);
  const { img, name, description, frontendCode, backendCode, liveLink } =
    project || {};

  return (
    <div className="card  w-[310px] md:w-96 md:mx-0 mx-auto shadow-xl backdrop-blur-md project-card-view ">
      <figure>
        <img className="p-8" src={img} alt="Shoes" />
      </figure>
      <div className="p-4 text-center">
        <h2 className="text-2xl mb-2">{name}</h2>
        <p className="text-gray-200 ">
          {description.split(" ").slice(0, 40).join(" ")}
        </p>
        <div className="card-actions justify-center my-4">
          <button className="custom-btn ">
            <Link
              to={frontendCode}
              className="flex justify-center items-center gap-2"
              target="_blank"
            >
              {" "}
              <FaGithub /> Client
            </Link>
          </button>
          <button className="custom-btn ">
            <Link
              to={backendCode}
              className="flex justify-center items-center gap-2"
              target="_blank"
            >
              {" "}
              <FaGithub /> Server
            </Link>
          </button>
          <button className="custom-btn ">
            <Link
              to={liveLink}
              className="flex justify-center items-center gap-2"
              target="_blank"
            >
              {" "}
              <CgWebsite /> Demo
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
