import React from "react";
import { Link } from "react-router-dom";

const DashboardProjects = () => {
  return (
    <div className="h-screen flex flex-col justify-center mx-5">
      <div className="mb-10">
        <Link to={"/dashboard/projects/add-projects"}>
          <button className="sized-btn bg-sky-700">Add project</button>
        </Link>
      </div>
    </div>
  );
};

export default DashboardProjects;
