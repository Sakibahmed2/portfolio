import React from "react";
import { Link } from "react-router-dom";
import { useGetAllSkillQuery } from "../../../Redux/api/skillsApi";
import LoadingPage from "../../../components/ui/LoadingPage/LoadingPage";

const DashboardSkills = () => {
  const { data, isLoading } = useGetAllSkillQuery({});

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-screen flex flex-col justify-center mx-5">
      <div className="mb-10">
        <Link to={"/dashboard/skills/add-skill"}>
          <button className="sized-btn bg-sky-700">Add skill</button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto w-full md:w-[800px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
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
                          <img src={item?.icon} alt="Skill image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkills;
