import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "../../../Redux/api/projectApi";
import { CgWebsite } from "react-icons/cg";
import { FaGithub, FaTrash } from "react-icons/fa";
import { MdOutlineCreate } from "react-icons/md";
import LoadingPage from "../../../components/ui/LoadingPage/LoadingPage";
import { toast } from "sonner";

const DashboardProjects = () => {
  const { data, isLoading, refetch } = useGetAllProjectsQuery({});
  const [deleteProject] = useDeleteProjectMutation();

  if (isLoading) {
    return <LoadingPage />;
  }

  const handleDelete = async (id) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await deleteProject(id);
      if (res?.data?.success) {
        toast.success(res?.data.message, { id: toastId });
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center mx-5">
      <div className="mb-10">
        <Link to={"/dashboard/projects/add-projects"}>
          <button className="sized-btn bg-sky-700">Add project</button>
        </Link>
      </div>

      <div className="overflow-x-auto ">
        <table className="table table-xs md:table-lg">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>img</th>
              <th>Name</th>
              <th>Link</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item, index) => (
              <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.img} alt="Skill image" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>
                  <div className="md:flex items-center gap-2">
                    <button className="sized-btn bg-gray-700">
                      <Link
                        to={item.liveLink}
                        className="flex justify-center items-center gap-2"
                        target="_blank"
                      >
                        {" "}
                        <CgWebsite /> Demo
                      </Link>
                    </button>
                    <button className="sized-btn bg-red-800">
                      <Link
                        to={item.frontendCode}
                        className="flex justify-center items-center gap-2"
                        target="_blank"
                      >
                        {" "}
                        <FaGithub /> Client
                      </Link>
                    </button>
                    <button className="sized-btn bg-sky-800">
                      <Link
                        to={item.backendCode}
                        className="flex justify-center items-center gap-2"
                        target="_blank"
                      >
                        {" "}
                        <FaGithub /> Server
                      </Link>
                    </button>
                  </div>
                </td>
                <td>
                  <div className="md:flex gap-2">
                    <Link
                      to={`/dashboard/projects/update-projects/${item._id}`}
                    >
                      <button className="sized-btn bg-gray-700 md:text-xl">
                        <MdOutlineCreate />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item?._id)}
                      className="sized-btn bg-red-700 md:text-xl mt-2 md:mt-0"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProjects;
