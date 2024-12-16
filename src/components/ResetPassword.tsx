import React, { useState, ChangeEvent, FormEvent } from "react";
import { GoogleIcon } from "./common/Icons";
import TextInput from "./common/TextInput.tsx";
import PasswordInput from "./common/PasswordInput.tsx";
import PrimaryBtn from "./common/PrimaryBtn.tsx";
import Copyright from "./common/Copyright.tsx";
import rightImg from "../assets/images/right-top-img.png";
import logo from "../assets/images/logo.png";

interface FormData {
  email: string;
}
const ResetPassword: React.FC = () => {
  const initialState: FormData = {
    email: "",
  };

  const [formdata, setFormData] = useState<FormData>(initialState);

  const onInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setFormData({ ...formdata, [field]: e.target.value });
  };

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (formdata.email) {
      alert("Form submitted successfully!");
      console.log(formdata, "reset password");
      setFormData(initialState);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="relative">
      <div className="h-screen flex flex-col justify-center items-center px-4 pb-10 sm:pb-0 min-h-[600px]">
        <img
          className="absolute top-0 left-0 rotate-[270deg] 2xl:h-[20vw] 2xl:w-[20vw] md:w-[300px] lg:w-[350px] md:h-[300px]  lg:h-[350px] sm:w-[170px] w-[120px] sm:h-[170px] h-[120px] pointer-events-none z-[1] hidden sm:block"
          src={rightImg}
          alt="Background decoration"
        />
        <img src={logo} alt="Logo" className="mb-2 sm:hidden" />
        <div className="w-full max-w-[320px] z-10">
          <h1 className="text-lg font-medium sm:font-bold sm:pb-1 pb-2 text-center sm:uppercase">
            Password reset
          </h1>
          <p className="text-sm font-medium text-black text-center pb-6">
            Enter your email address and we will send you an email with
            instructions on how to reset your password.
          </p>
          <TextInput
            onInputChange={(e) => onInputChange(e, "email")}
            formdata={formdata.email}
            label="Email address*"
          />

          <div className="sm:mt-7 mt-5">
            <PrimaryBtn text="RESET PASSWORD" />
          </div>
        </div>
        <Copyright />
      </div>
    </form>
  );
};

export default ResetPassword;
