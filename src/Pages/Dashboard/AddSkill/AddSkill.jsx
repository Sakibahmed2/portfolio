import React from "react";
import CustomForm from "../../../components/Form/CustomInput/CustomForm";
import CustomInput from "../../../components/Form/CustomInput/CustomInput";
import { useAddSkillMutation } from "../../../Redux/api/skillsApi";
import { toast } from "sonner";

const defaultValues = {
  title: "",
  icon: "",
};

const AddSkill = () => {
  const [addSkill] = useAddSkillMutation();

  const handleSubmit = async (data) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await addSkill(data);
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.message, { id: toastId });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <CustomForm onSubmit={handleSubmit} defaultValues={defaultValues}>
        <CustomInput name={"title"} label={"Title"} />
        <CustomInput name={"icon"} label={"Icon"} />

        <button type="submit" className="simple-btn mt-4">
          Add skill
        </button>
      </CustomForm>
    </div>
  );
};

export default AddSkill;
