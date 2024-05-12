import React from "react";
import { Link } from "react-router-dom";
import {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
} from "../../../Redux/api/blogsApi";
import { MdOutlineCreate } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import LoadingPage from "../../../components/ui/LoadingPage/LoadingPage";
import { toast } from "sonner";

const DashboardBlogs = () => {
  const { data, isLoading, refetch } = useGetAllBlogsQuery({});
  const [deleteBlog] = useDeleteBlogMutation();
  if (isLoading) {
    return <LoadingPage />;
  }

  const handleDelete = async (id) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await deleteBlog(id);
      if (res?.data?.success) {
        toast.success(res?.data.message, { id: toastId });
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="pt-20 mx-4 h-screen">
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.post.slice(0, 100),
                      }}
                    />
                  </td>
                  <td>
                    <div className="md:flex gap-2">
                      <Link to={`/dashboard/blogs/update-blogs/${item._id}`}>
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
    </div>
  );
};

export default DashboardBlogs;
