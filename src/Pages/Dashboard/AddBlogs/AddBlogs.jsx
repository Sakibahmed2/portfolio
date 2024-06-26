import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Form/CustomInput";
import { useAddBlogsMutation } from "../../../Redux/api/blogsApi";
import { toast } from "sonner";
import DashboardSectionTitle from "../../../components/ui/DashboardSectionTitle/DashboardSectionTitle";

const defaultValues = {
  title: "",
};

const AddBlogs = () => {
  const [addBlogs] = useAddBlogsMutation();

  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    const blogData = {
      title: data.title,
      post: content,
    };
    try {
      const res = await addBlogs(blogData);
      if (res?.data?.success) {
        toast.success(res?.data.message, { id: toastId });
        setContent("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mx-5 ">
      <DashboardSectionTitle title={"Add blog"} />
      <CustomForm onSubmit={handleSubmit} defaultValues={defaultValues}>
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

export default AddBlogs;
