import React from "react";
import "./Projects.css";

// project images
import cca from "../../assets/Projects/CCA.png";
import recipeMaster from "../../assets/Projects/Recipe master.png";
import toyZone from "../../assets/Projects/Toy zone.png";
import fabricFinesse from "../../assets/Projects/fabric-finesse.png";
import ProjectCard from "../../components/ui/ProjectCard/ProjectCard";
import donorVerse from "../../assets/Projects/donor-verse.png";

const projectsData = [
  {
    image: fabricFinesse,
    name: "Fabric finesse",
    description:
      "Fabric Finesse is an innovative cloth store management system built with TypeScript, Next.js, Redux, Redux Persist, and Material UI. It empowers both administrators and users with a comprehensive set of features. Administrators can access a sophisticated dashboard, crafted with Next.js and Material UI, to effortlessly manage inventory and orders. User authentication, fortified by TypeScript-powered Redux, ensures a secure login process. Redux Persist enriches the user experience by preserving state across sessions. The frontend, adorned with Material UI components, offers a sleek and responsive interface for users to explore the catalog, add items to their shopping cart, and complete purchases. Fabric Finesse prioritizes security, performance, and usability, delivering a seamless shopping experience for customers while providing administrators with powerful tools for inventory and order management.",
    clientCode: "https://github.com/Sakibahmed2/fabric-finesse-frontend",
    serverCode: "https://github.com/Sakibahmed2/fabric-finesse-backend",
    liveLink: "https://fabric-finesse-frontend.vercel.app",
  },
  {
    image: donorVerse,
    name: "Donor verse",
    description:
      "Photography learning platform. In this projects an instructor can upload photography courses and student can learn there. This project sets up a dashboard UI with a sidebar menu that displays different options based on the user's role (admin, instructor, or student) and allows them to navigate to different parts of the application",
    clientCode: "https://github.com/Sakibahmed2/donor-verse-client",
    serverCode: "https://github.com/Sakibahmed2/doner-verse-server",
    liveLink: "https://donor-verse.vercel.app",
  },
  {
    image: cca,
    name: "Creative capture academy",
    description:
      "Photography learning platform. In this projects an instructor can upload photography courses and student can learn there. This project sets up a dashboard UI with a sidebar menu that displays different options based on the user's role (admin, instructor, or student) and allows them to navigate to different parts of the application",
    clientCode:
      "https://github.com/Sakibahmed2/creative-capture-academy-client",
    serverCode:
      "https://github.com/Sakibahmed2/creative-capture-academy-server",
    liveLink: "https://creative-capture-academy.web.app/",
  },
  {
    image: toyZone,
    name: "Toy zone",
    description:
      "In this project a seller can upload toy action figure and buyer can buy toy from this platfrom. The project imports necessary dependencies from React and Firebase for authentication. Privet Routes component provides a way to implement private routes in a React application by checking the authentication status and controlling access to certain routes based on that status.",
    clientCode: "https://github.com/Sakibahmed2/Toy-zone-client",
    serverCode: "https://github.com/Sakibahmed2/Toy-zone-server",
    liveLink: "https://assignmen-11-toy-zone.web.app",
  },
  {
    image: recipeMaster,
    name: "Recipe master",
    description:
      "In this project you can see all the chef adding by admin every chef have some recipe they share. It provides the functionality for users to log in with email and password or with a Google account. Privet Routes component provides a way to implement private routes in a React application by checking the authentication status and controlling access to certain routes based on that status.",
    clientCode: "https://github.com/Sakibahmed2/Recipe-master",
    serverCode: "https://github.com/Sakibahmed2/Recipe-master-server",
    liveLink: "https://assignment-10-recipe-master.web.app/",
  },
];

const Projects = () => {
  return (
    <div className="pt-10 max-w-screen-xl mx-auto">
      <div className="text-center text-white mt-12">
        <h4 className="text-4xl">
          My Recent <span className="primary-text font-semibold">Works</span>
        </h4>
        <p className="">Here are a few projects I've worked recently</p>
      </div>

      {/* Projects card */}

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {projectsData.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            clientCode={item.clientCode}
            serverCode={item.serverCode}
            liveLink={item.liveLink}
          />
        ))}

        {/* <div className="card w-[350px] md:w-96 md:mx-0 mx-4 shadow-xl backdrop-blur-md project-card-view">
          <figure>
            <img className="p-8" src={cca} alt="Shoes" />
          </figure>
          <div className="p-4 text-center">
            <h2 className="text-2xl mb-2">Creative Capture Academy</h2>
            <p className="text-gray-200">
              Photography learning platform. In this projects an instructor can
              upload photography courses and student can learn there. This
              project sets up a dashboard UI with a sidebar menu that displays
              different options based on the user's role (admin, instructor, or
              student) and allows them to navigate to different parts of the
              application{" "}
            </p>
            <div className="card-actions justify-center mt-4 mb-4">
              <button className="custom-btn ">
                <Link
                  to="https://github.com/Sakibahmed2/creative-capture-academy-client"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <FaGithub /> Client
                </Link>
              </button>
              <button className="custom-btn ">
                <Link
                  to="https://github.com/Sakibahmed2/creative-capture-academy-server"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <FaGithub /> Server
                </Link>
              </button>
              <button className="custom-btn ">
                <Link
                  to="https://creative-capture-academy.web.app/"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <CgWebsite /> Demo
                </Link>
              </button>
            </div>
          </div>
        </div> */}

        {/* <div className="card w-[350px] md:w-96 md:mx-0 mx-4 shadow-xl backdrop-blur-md project-card-view">
          <figure>
            <img className="p-8" src={toyZone} alt="Shoes" />
          </figure>
          <div className="p-4 text-center">
            <h2 className="text-2xl mb-2">Toy zone</h2>
            <p className="text-gray-200">
              {" "}
              In this project a seller can upload toy action figure and buyer
              can buy toy from this platfrom. The project imports necessary
              dependencies from React and Firebase for authentication. Privet
              Routes component provides a way to implement private routes in a
              React application by checking the authentication status and
              controlling access to certain routes based on that status.
            </p>
            <div className="card-actions justify-center mt-4 mb-4">
              <button className="custom-btn ">
                <Link
                  to="https://github.com/Sakibahmed2/Toy-zone-client"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <FaGithub /> Client
                </Link>
              </button>
              <button className="custom-btn ">
                <Link
                  to="https://github.com/Sakibahmed2/Toy-zone-server"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <FaGithub /> Server
                </Link>
              </button>
              <button className="custom-btn ">
                <Link
                  to="https://assignmen-11-toy-zone.web.app"
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

        <div className="card w-[350px] md:w-96 md:mx-0 mx-4 shadow-xl backdrop-blur-md project-card-view">
          <figure>
            <img className="p-8" src={recipeMaster} alt="Shoes" />
          </figure>
          <div className="p-4 text-center">
            <h2 className="text-2xl mb-2">Recipe master</h2>
            <p className="text-gray-200">
              {" "}
              In this project you can see all the chef adding by admin every
              chef have some recipe they share. It provides the functionality
              for users to log in with email and password or with a Google
              account. Privet Routes component provides a way to implement
              private routes in a React application by checking the
              authentication status and controlling access to certain routes
              based on that status.
            </p>
            <div className="card-actions justify-center mt-4 mb-4">
              <button className="custom-btn ">
                <Link
                  to="https://github.com/Sakibahmed2/Recipe-master"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <FaGithub /> Client
                </Link>
              </button>
              <button className="custom-btn ">
                <Link
                  to="https://github.com/Sakibahmed2/Recipe-master-server"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <FaGithub /> Server
                </Link>
              </button>
              <button className="custom-btn ">
                <Link
                  to="https://assignment-10-recipe-master.web.app/"
                  className="flex justify-center items-center gap-2"
                  target="_blank"
                >
                  {" "}
                  <CgWebsite /> Demo
                </Link>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
