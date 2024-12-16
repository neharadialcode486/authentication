import React from "react";
import { EyeIcon, EyeIconOpen } from "./Icons";
import { Link } from "react-router-dom";

interface PasswordInputProps {
  show: boolean;
  label: String;
  forgotPassword: boolean;
  setShow: (show: boolean) => void;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
  formdata: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  show,
  setShow,
  onInputChange,
  formdata,
  label,
  forgotPassword,
}) => (
  <>
    <div className="flex sm:justify-between mt-5 justify-center">
      <label
        className="text-black opacity-45 text-base font-normal"
        htmlFor="password"
      >
        {label}
      </label>
      {forgotPassword && (
        <Link
          className="text-[13px] font-normal text-blue underline hover:text-primary smoothness hidden sm:block"
          to="/reset-password"
        >
          Forgot password
        </Link>
      )}
    </div>
    <div className="relative">
      <input
        id="password"
        required
        onChange={(e) => onInputChange(e, formdata)}
        value={formdata}
        className="bg-[#F4F4F6] block w-full py-2 mt-1 rounded-[10px] px-3 text-sm dark:text-[#000000]"
        type={show ? "password" : "text"}
      />
      <span
        onClick={() => setShow(!show)}
        className="absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
      >
        {show ? <EyeIconOpen /> : <EyeIcon />}
      </span>
    </div>
  </>
);

export default PasswordInput;
