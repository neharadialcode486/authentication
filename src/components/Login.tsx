import React, { useState, ChangeEvent, FormEvent } from "react";
import rightImg from "../assets/images/right-top-img.png";
import logo from "../assets/images/logo.png";
import { EyeIcon, EyeIconOpen, GoogleIcon } from "./common/Icons.jsx";
import TextInput from "./common/TextInput.tsx";
import PasswordInput from "./common/PasswordInput.tsx";
import PrimaryBtn from "./common/PrimaryBtn.tsx";
import { Link } from "react-router-dom";
import Copyright from "./common/Copyright.tsx";

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
      console.log(formdata, "formadata login");
      setFormData(initialState);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="relative">
      <div className="md:h-screen flex flex-col justify-center items-center px-4 pb-[15%] sm:pb-0 min-h-[750px]">
        <img
          className="absolute top-0 right-0 2xl:h-[20vw] 2xl:w-[20vw] md:w-[300px] lg:w-[400px] md:h-[300px]  lg:h-[400px] sm:w-[170px] w-[120px] sm:h-[170px] h-[120px] pointer-events-none z-[-1] hidden sm:block"
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
            className="w-full rounded-[10px] sm:rounded-none border-[2px] flex gap-4 items-center border-[#B1ADC0] sm:px-10 px-5 sm:py-3 py-[5px] ff_lato text-[#64626C] justify-center hover:border-primary smoothness"
          >
            <GoogleIcon />
            Sign in with Google
          </button>
          <div className="flex gap-4 items-center justify-between py-5">
            <span className="inline-block w-[40%] h-[2px] bg-black dark:bg-white opacity-15"></span>
            <span className="text-black opacity-35">OR</span>
            <span className="inline-block w-[40%] h-[2px] bg-black dark:bg-white  opacity-15"></span>
          </div>
          <TextInput
            onInputChange={(e) => onInputChange(e, "email")}
            formdata={formdata.email}
            label="Email address*"
          />

          <PasswordInput
            onInputChange={(e) => onInputChange(e, "password")}
            formdata={formdata.password}
            show={show}
            setShow={setShow}
            label="Password"
            forgotPassword={true}
          />
          <div className="text-center">
            <Link
              className="sm:text-[13px] text-[10px] font-normal text-blue underline hover:text-primary smoothness text-center sm:hidden"
              to="/reset-password"
            >
              Forgot password
            </Link>
          </div>
          <div className="sm:mt-7 mt-5">
            <PrimaryBtn text="LOGIN" />
          </div>

          <div className="sm:flex justify-between text-center sm:text-start sm:mt-2 mt-5">
            <label
              className="text-black opacity-77 sm:text-md text-xs sm:font-medium font-bold"
              htmlFor=""
            >
              Not a member?
            </label>
            <a
              className="sm:text-md text-base font-normal text-blue underline hover:text-primary smoothness hidden sm:block"
              href="#"
            >
              Sign up
            </a>
            <div className="sm:hidden">
              <Link
                className="bg-primary rounded-[10px] text-white py-[7px] px-5 w-full inline-block font-bold hover:bg-transparent hover:text-primary border-[1px] border-transparent hover:border-primary smoothness sm:text-md text-base"
                to="/sign-up"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
        <Copyright />
      </div>
    </form>
  );
};

export default Login;
