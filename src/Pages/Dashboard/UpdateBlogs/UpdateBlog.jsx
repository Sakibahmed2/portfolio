import JoditEditor from "jodit-react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "../../../Redux/api/blogsApi";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Form/CustomInput";
import DashboardSectionTitle from "../../../components/ui/DashboardSectionTitle/DashboardSectionTitle";
import LoadingPage from "../../../components/ui/LoadingPage/LoadingPage";

const UpdateBlog = () => {
  const editor = useRef(null);
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBlogQuery(id);
  const blogData = data?.data;
  const [content, setContent] = useState(blogData?.post);
  const [updateBlog] = useUpdateBlogMutation();

  const defaultValues = {
    title: blogData?.title || "",
  };

  useEffect(() => {
    setContent(blogData?.post);
  }, [isLoading]);

  const handleSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    const updatedBlog = {
      title: data.title,
      post: content,
    };
    try {
      const res = await updateBlog({ data: updatedBlog, id: id });
      if (res?.data?.success) {
        toast.success(res?.data.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-5 pt-40 md:pt-0">
      <DashboardSectionTitle title={"Update blog"} />
      <CustomForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        {/* CustomInput for the blog title with default value */}
        <CustomInput name={"title"} label={"Blog title"} />

        <div className="mt-3">
          <JoditEditor
            ref={editor}
            value={content}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>

        <button type="submit" className="simple-btn mt-4 w-full ">
          Add blog
        </button>
      </CustomForm>
    </div>
  );
};

export default UpdateBlog;
