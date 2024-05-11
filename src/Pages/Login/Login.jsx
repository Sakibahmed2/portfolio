import React from "react";
import CustomForm from "../../components/Form/CustomInput/CustomForm";
import CustomInput from "../../components/Form/CustomInput/CustomInput";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-zinc-700 w-full max-w-[500px] flex flex-col justify-center items-center py-10 mx-5 rounded-md border border-gray-600 bg-opacity-25">
        <div>
          <p className="text-2xl font-semibold my-5">Login here</p>
        </div>
        <CustomForm onSubmit={handleLogin} defaultValues={defaultValues}>
          <CustomInput name={"email"} label={"Email"} />
          <CustomInput name={"password"} label={"Password"} />

          <button className="simple-btn mt-2" type="submit">
            Login
          </button>
        </CustomForm>
      </div>
    </div>
  );
};

export default LoginPage;
