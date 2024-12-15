import React, { useState, ChangeEvent, FormEvent } from "react";
import rightImg from "../assets/images/right-top-img.png";
import logo from "../assets/images/logo.png";
import { EyeIcon, EyeIconOpen, GoogleIcon } from "./common/Icons.jsx";
import TextInput from "./common/TextInput.tsx";
import PasswordInput from "./common/PasswordInput.tsx";
import PrimaryBtn from "./common/PrimaryBtn.tsx";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const initialState: FormData = {
    email: "",
    password: "",
  };

  const [formdata, setFormData] = useState<FormData>(initialState);
  const [show, setShow] = useState<boolean>(true);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setFormData({ ...formdata, [field]: e.target.value });
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (formdata.email && formdata.password) {
      alert("Form submitted successfully!");
      console.log(formdata, "formadata");
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="relative">
      <div className="h-screen flex flex-col justify-center items-center px-4 mb-10 sm:mb-0 min-h-[600px]">
        <img
          className="absolute top-0 right-0 2xl:h-[20vw] 2xl:w-[20vw] md:w-[300px] md:h-[300px] sm:w-[170px] w-[120px] sm:h-[170px] h-[120px] pointer-events-none z-[-1] hidden sm:block"
          src={rightImg}
          alt="Background decoration"
        />
        <img src={logo} alt="Logo" className="mb-2 sm:hidden" />
        <div className="w-full max-w-[300px]">
          <h1 className="sm:text-[36px] text-[30px] font-medium sm:pb-3 pb-7 text-center">
            Welcome back!
          </h1>
          <button
            type="button"
            className="w-full rounded-[10px] sm:rounded-none border-[2px] flex gap-4 items-center border-[#B1ADC0] sm:px-10 px-5 sm:py-3 py-[5px] ff_lato text-[#64626C] justify-center hover:border-[#FF5C00] transition-all duration-300 ease-in-out"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
          <div className="flex gap-4 items-center justify-between py-5">
            <span className="inline-block w-[40%] h-[2px] bg-[#000000] bg-opacity-15"></span>
            <span className="text-[#000000] opacity-35">OR</span>
            <span className="inline-block w-[40%] h-[2px] bg-[#000000] bg-opacity-15"></span>
          </div>
          <TextInput onInputChange={onInputChange} formdata={formdata} />
          <div className="flex sm:justify-between mt-5 justify-center">
            <label
              className="text-[#000000] opacity-45 text-base font-normal"
              htmlFor="password"
            >
              Password
            </label>
            <a
              className="text-[13px] font-normal text-[#0027B4] underline hover:text-[#FF5C00] transition-all duration-300 ease-in-out hidden sm:block"
              href="#"
            >
              Forgot password
            </a>
          </div>
          <PasswordInput
            onInputChange={onInputChange}
            formdata={formdata}
            show={show}
            setShow={setShow}
          />
          <div className="text-center">
            <a
              className="sm:text-[13px] text-[10px] font-normal text-[#0027B4] underline hover:text-[#FF5C00] transition-all duration-300 ease-in-out text-center sm:hidden"
              href="#"
            >
              Forgot password
            </a>
          </div>
          <div className="sm:mt-7 mt-5">
            <PrimaryBtn text="LOGIN" />
          </div>

          <div className="sm:flex justify-between text-center sm:text-start sm:mt-2 mt-5">
            <label
              className="text-[#000000] opacity-77 sm:text-[18px] text-[13px] sm:font-medium font-bold"
              htmlFor=""
            >
              Not a member?
            </label>
            <a
              className="sm:text-[18px] text-base font-normal text-[#0027B4] underline hover:text-[#FF5C00] transition-all duration-300 ease-in-out hidden sm:block"
              href="#"
            >
              Sign up
            </a>
            <div className="sm:hidden">
              <PrimaryBtn text="REGISTER" />
            </div>
          </div>
        </div>
        <div className="text-center absolute sm:bottom-[10px] bottom-[-30px]">
          <p className="text-[#000000] opacity-25 text-[12px] font-bold">
            justgetleads Inc.
          </p>
          <p className="text-[#000000] opacity-25 text-[12px] font-normal">
            all rights reserved
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
