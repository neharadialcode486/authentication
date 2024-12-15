import React from "react";
import { EyeIcon, EyeIconOpen } from "./Icons";

interface PasswordInputProps {
  show: boolean;
  setShow: (show: boolean) => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "password"
  ) => void;
  formdata: { password: string };
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  show,
  setShow,
  onInputChange,
  formdata,
}) => (
  <div className="relative">
    <input
      id="password"
      required
      onChange={(e) => onInputChange(e, "password")}
      value={formdata.password}
      className="bg-[#F4F4F6] block w-full py-2 mt-1 rounded-[10px] px-3 text-sm"
      type={show ? "password" : "text"}
    />
    <span
      onClick={() => setShow(!show)}
      className="absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
    >
      {show ? <EyeIconOpen /> : <EyeIcon />}
    </span>
  </div>
);

export default PasswordInput;
