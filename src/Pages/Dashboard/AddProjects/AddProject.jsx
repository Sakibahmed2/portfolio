import React from "react";
import CustomForm from "../../../components/Form/CustomForm";
import CustomInput from "../../../components/Form/CustomInput";
import CustomTextArea from "../../../components/Form/CustomTextArea";
import { useAddProjectsMutation } from "../../../Redux/api/projectApi";
import { toast } from "sonner";

const defaultValues = {
  img: "",
  name: "",
  description: "",
  technologies: "",
  liveLink: "",
  frontendCode: "",
  backendCode: "",
};

const AddProject = () => {
  const [addProject] = useAddProjectsMutation();

  const handleSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    console.log(data);
    try {
      const res = await addProject(data);
      console.log(res);
      if (res?.data?.success) {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center md:w-[600px] mx-4">
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
          Add project
        </button>
      </CustomForm>
    </div>
  );
};

export default AddProject;
