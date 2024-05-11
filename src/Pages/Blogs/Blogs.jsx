import React from "react";
import { useGetAllBlogsQuery } from "../../Redux/api/blogsApi";

const Blogs = () => {
  const { data } = useGetAllBlogsQuery({});

  return (
    <div className="py-20 max-w-screen-xl mx-auto">
      <h2 className="text-white text-4xl font-semibold text-center">Blogs </h2>

      <div className="">
        {data?.data?.map((item) => (
          <div
            key={item?._id}
            className="bg-gray-800 mt-5 py-5 px-8 rounded-md"
          >
            {" "}
            <h2 className="text-4xl font-semibold">{item?.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: item?.post }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
