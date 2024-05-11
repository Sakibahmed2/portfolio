import React from "react";
import "./Projects.css";

// project images
import { useGetAllProjectsQuery } from "../../Redux/api/projectApi";
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard";
import LoadingPage from "../../components/ui/LoadingPage/LoadingPage";

const Projects = () => {
  const { data, isLoading } = useGetAllProjectsQuery({});

  return (
    <div className="pt-10 max-w-screen-xl mx-auto">
      <div className="text-center text-white mt-12">
        <h4 className="text-4xl">
          My Recent <span className="primary-text font-semibold">Works</span>
        </h4>
        <p className="">Here are a few projects I've worked recently</p>
      </div>

      {/* Projects card */}

      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {data?.data?.map((item) => (
            <ProjectCard key={item._id} project={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
