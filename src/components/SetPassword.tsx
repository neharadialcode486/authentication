import React, { ChangeEvent, FormEvent, useState } from "react";
import logo from "../assets/images/logo.png";
import rightImg from "../assets/images/right-top-img.png";
import Copyright from "./common/Copyright.tsx";
import PasswordInput from "./common/PasswordInput.tsx";
import PrimaryBtn from "./common/PrimaryBtn.tsx";

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

const SetPassword: React.FC = () => {
  const initialState: FormData = {
    newPassword: "",
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
    if (formdata.newPassword && formdata.confirmPassword) {
      alert("Form submitted successfully!");
      console.log(formdata, "formdata");
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="relative">
      <div className="h-screen flex flex-col justify-center items-center px-4 mb-10 sm:mb-0 min-h-[600px]">
        <img
          className="absolute top-0 right-0  2xl:h-[20vw] 2xl:w-[20vw] md:w-[300px] lg:w-[400px] md:h-[300px] lg:h-[400px] sm:w-[170px] w-[120px] sm:h-[170px] h-[120px] pointer-events-none z-[-1] hidden sm:block"
          src={rightImg}
          alt="Background decoration"
        />
        <img src={logo} alt="Logo" className="mb-2 sm:hidden" />
        <div className="w-full max-w-[320px]">
          <h1 className="text-lg font-medium sm:font-bold sm:pb-1 pb-2 text-center sm:uppercase">
            Set Password
          </h1>
          <p className="text-sm font-medium text-black text-center pb-2">
            Type in your new Password and confirmation to set the new Password
            for your account!
          </p>
          <PasswordInput
            onInputChange={(e) => onInputChange(e, "newPassword")}
            formdata={formdata.newPassword}
            show={showNewPassword}
            setShow={setShowNewPassword}
            label="New Password"
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
          <div className="sm:mt-7 mt-5">
            <PrimaryBtn text="SAVE NEW PASSWORD" />
          </div>
        </div>
        <Copyright />
      </div>
    </form>
  );
};

export default SetPassword;
