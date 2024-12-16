import React, { useState, ChangeEvent, FormEvent } from "react";
import rightImg from "../assets/images/right-top-img.png";
import logo from "../assets/images/logo.png";
import {
  EyeIcon,
  EyeIconOpen,
  GoogleIcon,
  WecomeLogo,
} from "./common/Icons.jsx";
import TextInput from "./common/TextInput.tsx";
import PasswordInput from "./common/PasswordInput.tsx";
import PrimaryBtn from "./common/PrimaryBtn.tsx";
import { Link } from "react-router-dom";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const initialState: FormData = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  };

  const [formdata, setFormData] = useState<FormData>(initialState);
  const [showNewPassword, setShowNewPassword] = useState<boolean>(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(true);

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
      console.log(formdata, "formadata sign-up");
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="relative">
      <div className="md:h-screen flex flex-col justify-center items-center px-4 pb-10 pt-[15%] sm:pt-0  sm:pb-0 min-h-[600px] mt-4 sm:mt-0">
        <img
          className="absolute bottom-0 right-0 rotate-[-270deg] 2xl:h-[20vw] 2xl:w-[20vw] md:w-[300px] lg:w-[400px] md:h-[300px]  lg:h-[400px] sm:w-[170px] w-[120px] sm:h-[170px] h-[120px] pointer-events-none z-[-1] hidden sm:block"
          src={rightImg}
          alt="Background decoration"
        />
        <div className="w-full max-w-[300px]">
          <WecomeLogo />
          <h1 className="sm:text-[36px] text-[30px] font-medium sm:pb-3 pb-7 text-center pt-2">
            Welcome!
          </h1>
          <button
            type="button"
            className="w-full rounded-[10px] sm:rounded-none border-[2px] flex gap-4 items-center border-[#B1ADC0] sm:px-10 px-5 sm:py-3 py-[5px] ff_lato text-[#64626C] justify-center hover:border-primary smoothness"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
          <div className="flex gap-4 items-center justify-between py-5">
            <span className="inline-block w-[40%] h-[2px] bg-black dark:bg-white opacity-15"></span>
            <span className="text-black opacity-35">OR</span>
            <span className="inline-block w-[40%] h-[2px] bg-black dark:bg-white opacity-15"></span>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 mb-5">
            <TextInput
              onInputChange={(e) => onInputChange(e, "firstName")}
              formdata={formdata.firstName}
              label="First Name"
            />
            <TextInput
              onInputChange={(e) => onInputChange(e, "lastName")}
              formdata={formdata.lastName}
              label="Last Name"
            />
          </div>
          <TextInput
            onInputChange={(e) => onInputChange(e, "email")}
            formdata={formdata.email}
            label="Email address*"
          />

          <PasswordInput
            onInputChange={(e) => onInputChange(e, "password")}
            formdata={formdata.password}
            show={showNewPassword}
            setShow={setShowNewPassword}
            label="Password"
            forgotPassword={false}
          />
          <PasswordInput
            onInputChange={(e) => onInputChange(e, "confirmPassword")}
            formdata={formdata.confirmPassword}
            show={showConfirmPassword}
            setShow={setShowConfirmPassword}
            label="Confirm Password"
            forgotPassword={false}
          />
          <div className="text-center">
            <Link
              className="sm:text-[13px] text-[10px] font-normal text-blue underline hover:text-primary smoothness text-center sm:hidden"
              to="/reset-password"
            >
              Forgot password
            </Link>
          </div>
          <div className="sm:mt-7 mt-5 pb-[15%]">
            <PrimaryBtn text="LOGIN" />
          </div>
        </div>
        <div className="text-center absolute sm:bottom-[10px] bottom-[0px]">
          <p className="text-black opacity-25 text-[12px] font-bold">
            justgetleads Inc.
          </p>
          <p className="text-black opacity-25 text-[12px] font-normal">
            all rights reserved
          </p>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
