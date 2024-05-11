import React from "react";
import { Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../../../Redux/api/blogsApi";
import { MdOutlineCreate } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import LoadingPage from "../../../components/ui/LoadingPage/LoadingPage";

const DashboardBlogs = () => {
  const { data, isLoading } = useGetAllBlogsQuery({});
  if (isLoading) {
    return <LoadingPage />;
  }

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((item, index) => (
                <tr key={item?._id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <div dangerouslySetInnerHTML={{ __html: item?.post }} />
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link to={`/dashboard/blogs/update-blogs/${item._id}`}>
                        <button className="sized-btn bg-gray-700 text-xl">
                          <MdOutlineCreate />
                        </button>
                      </Link>
                      <button className="sized-btn bg-red-700 text-xl">
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
    </div>
  );
};

export default DashboardBlogs;
