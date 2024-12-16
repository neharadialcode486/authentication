import React from "react";

interface TextInputProps {
  formdata: string;
  label: string;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  formdata,
  onInputChange,
  label,
}) => {
  return (
    <>
      <div>
        <label
          className="text-blsck opacity-45 text-base font-normal flex justify-center sm:justify-start"
          htmlFor="email"
        >
          {label}
        </label>
        <input
          id="email"
          onChange={(e) => onInputChange(e, formdata)}
          className="bg-[#F4F4F6] block w-full py-2 mt-1 rounded-[10px] px-3 text-sm text-black dark:text-[#000000]"
          type={formdata === "email" ? "email" : "text"}
          required
          value={formdata}
        />
      </div>
    </>
  );
};

export default TextInput;
