import React from "react";
import CustomForm from "../../components/Form/CustomForm";
import CustomInput from "../../components/Form/CustomInput";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/features/auth/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    const toastId = toast.loading("Loading....");
    const { email, password } = data;

    try {
      if (!(email === "admin@gmail.com", password === "123456")) {
        return toast.error("Wrong pass or email", { id: toastId });
      }
      dispatch(setUser(data));
      toast.success("Login successfully", { id: toastId });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="bg-zinc-700 w-full max-w-[500px] flex flex-col justify-center items-center py-10 mx-5 rounded-md border border-gray-600 bg-opacity-25">
        <div>
          <p className="text-2xl font-semibold my-5">Login here</p>
        </div>
        <div className="w-full max-w-[400px] px-10">
          <CustomForm onSubmit={handleLogin} defaultValues={defaultValues}>
            <CustomInput name={"email"} label={"Email"} />
            <CustomInput name={"password"} label={"Password"} type="password" />

            <button className="custom-btn h-12 mt-3 w-full" type="submit">
              Login
            </button>
          </CustomForm>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
