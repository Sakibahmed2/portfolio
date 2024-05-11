import { Controller, useFormContext } from "react-hook-form";

const CustomTextArea = ({ name, label, type = "text" }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <label className="form-control w-full mt-3">
          <div className="label">
            <span className="label-text">{label}</span>
          </div>
          <textarea
            {...field}
            className="textarea  textarea-lg w-full bg-inherit border border-gray-600"
            placeholder={label}
          />
        </label>
      )}
    />
  );
};

export default CustomTextArea;
