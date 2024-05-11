import React from "react";
import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../../Redux/api/blogsApi";
import FormateText from "../../../libs/formateTextEditorText";

const DashboardBlogs = () => {
  const { data } = useGetAllBlogsQuery({});

  return (
    <div>
      <div className="mb-10">
        <Link to={"/dashboard/blogs/add-blogs"}>
          <button className="sized-btn bg-sky-700">Add blog</button>
        </Link>
      </div>
      <div>
        <div className="overflow-x-auto w-full md:w-[800px]">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Post</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <FormateText htmlContent={item?.post} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogs;
