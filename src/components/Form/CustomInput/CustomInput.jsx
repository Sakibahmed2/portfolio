import { Controller, useFormContext } from "react-hook-form";

const CustomInput = ({ name, label, type = "text" }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="form-control w-full max-w-md mt-3">
          <div className="label">
            <span className="label-text-alt">{label}</span>
          </div>
          <input
            {...field}
            type={type}
            placeholder={label}
            className="input w-full max-w-md bg-inherit border-2 border-gray-600"
          />
        </label>
      )}
    />
  );
};

export default CustomInput;
