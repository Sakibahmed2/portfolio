import { Controller, useFormContext } from "react-hook-form";

const CustomInput = ({ name, label, type = "text" }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="form-control w-full  mt-3">
          <div className="label">
            <span className="label-text-alt">{label}</span>
          </div>
          <input
            {...field}
            type={type}
            placeholder={label}
            className="input w-full  bg-inherit border border-gray-600"
          />
        </label>
      )}
    />
  );
};

export default CustomInput;
