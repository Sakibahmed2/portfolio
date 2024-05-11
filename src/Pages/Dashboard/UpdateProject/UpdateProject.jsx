import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Form/CustomInput";
import CustomTextArea from "../../../components/Form/CustomTextArea";
import {
  useGetSingleProjectQuery,
  useUpdateProjectMutation,
} from "../../../Redux/api/projectApi";
import LoadingPage from "../../../components/ui/LoadingPage/LoadingPage";
import { toast } from "sonner";
import DashboardSectionTitle from "../../../components/ui/DashboardSectionTitle/DashboardSectionTitle";

const UpdateProject = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProjectQuery(id);
  const [updateProject] = useUpdateProjectMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingPage />;
  }

  const projectData = data?.data;

  const defaultValues = {
    img: projectData?.img || "",
    name: projectData?.name || "",
    description: projectData?.description || "",
    technologies: projectData?.technologies || "",
    liveLink: projectData?.liveLink || "",
    frontendCode: projectData?.frontendCode || "",
    backendCode: projectData?.backendCode || "",
  };

  const handleSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    console.log(data);
    try {
      const res = await updateProject({ data, id });
      if (res?.data?.success) {
        toast.success(res?.data?.message, { id: toastId });
        navigate("/dashboard/projects");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center md:w-[600px] mx-4">
      <DashboardSectionTitle title="Update project" />
      <CustomForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="grid grid-cols-2 gap-4">
          <CustomInput name={"name"} label={"Project name"} />
          <CustomInput name={"img"} label={"Project img"} />
        </div>

        <CustomTextArea name={"description"} label={"Description"} />

        <CustomInput name={"technologies"} label={"Technologies"} />

        <div className="divider">Links</div>

        <div className="grid grid-cols-3 gap-4">
          <CustomInput name={"liveLink"} label={"Live link"} />
          <CustomInput name={"frontendCode"} label={"Frontend code"} />
          <CustomInput name={"backendCode"} label={"Backend code"} />
        </div>
        <button type="submit" className="simple-btn mt-4 w-full">
          Update project
        </button>
      </CustomForm>
    </div>
  );
};

export default UpdateProject;
