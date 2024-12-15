import React from "react";

interface TextInputProps {
  formdata: { email: string };
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "email"
  ) => void;
}

const TextInput: React.FC<TextInputProps> = ({ formdata, onInputChange }) => {
  return (
    <>
      <label
        className="text-[#000000] opacity-45 text-base font-normal flex justify-center sm:justify-start"
        htmlFor="email"
      >
        Email address*
      </label>
      <input
        id="email"
        onChange={(e) => onInputChange(e, "email")}
        className="bg-[#F4F4F6] block w-full py-2 mt-1 rounded-[10px] px-3 text-sm"
        type="email"
        required
        value={formdata.email}
      />
    </>
  );
};

export default TextInput;
