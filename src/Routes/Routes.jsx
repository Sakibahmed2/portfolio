import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/About/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import LoginPage from "../Pages/Login/Login";
import Dashboard from "../Layouts/Dashboard";
import DashboardSkills from "../Pages/Dashboard/Skills/SkillsDashboard";
import AddSkill from "../Pages/Dashboard/AddSkill/AddSkill";
import DashboardProjects from "../Pages/Dashboard/Projects/DashboardProjects";
import AddProject from "../Pages/Dashboard/AddProjects/AddProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/skills",
        element: <DashboardSkills />,
      },
      {
        path: "/dashboard/skills/add-skill",
        element: <AddSkill />,
      },

      // Projects routes
      {
        path: "/dashboard/projects",
        element: <DashboardProjects />,
      },
      {
        path: "/dashboard/projects/add-projects",
        element: <AddProject />,
      },
    ],
  },
]);

export default router;
