import React, { useState } from "react";
import rightImg from "../assets/images/right-top-img.png";
import logo from "../assets/images/logo.png";
import { EyeIcon, EyeIconOpen, GoogleIcon } from "./Icons";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [formdata, setFormData] = useState(initialState);
  const [show, setShow] = useState(true);
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (formdata.email && formdata.password) {
      alert("Form submitted successfully!");
      setFormData(initialState);
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="relative">
      <div className="h-screen flex flex-col justify-center items-center px-4 mb-10 sm:mb-0 min-h-[600px]">
        <img
          className="absolute top-0 right-0 2xl:h-[20vw] 2xl:w-[20vw] md:w-[300px] md:h-[300px] sm:w-[170px] w-[120px] sm:h-[170px] h-[120px] pointer-events-none z-[-1] hidden sm:block"
          src={rightImg}
          alt="rightImg"
        />
        <img src={logo} alt="logo" className="mb-2 sm:hidden" />
        <div className="w-full max-w-[300px]">
          <h1 className="sm:text-[36px] text-[30px] font-medium sm:pb-3 pb-7 text-center">
            Welcome back!
          </h1>
          <button className="w-full rounded-[10px] sm:rounded-none border-[2px] flex gap-4 items-center border-[#B1ADC0] sm:px-10 px-5 sm:py-3 py-[5px] ff_lato text-[#64626C] justify-center hover:border-[#FF5C00] transition-all duration-300 ease-in-out ">
            <GoogleIcon />
            Sign in with google
          </button>
          <div className="flex gap-4 items-center justify-between py-5">
            <span className="inline-block w-[40%] h-[2px] bg-[#000000] bg-opacity-15"></span>
            <span className="text-[#000000] opacity-35">OR</span>
            <span className="inline-block w-[40%] h-[2px] bg-[#000000] bg-opacity-15"></span>
          </div>
          <label
            className="text-[#000000] opacity-45 text-base font-normal flex justify-center sm:justify-start"
            htmlFor=""
          >
            Email address*
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formdata, email: e.target.value })
            }
            className="bg-[#F4F4F6] block w-full py-2 mt-1 rounded-[10px] px-3 text-sm"
            type="email"
            required
            value={formdata.email}
          />
          <div className="flex sm:justify-between mt-5 justify-center">
            <label
              className="text-[#000000] opacity-45 text-base  font-normal "
              htmlFor=""
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
          <div className="relative">
            <input
              required
              onChange={(e) =>
                setFormData({ ...formdata, password: e.target.value })
              }
              value={formdata.password}
              className="bg-[#F4F4F6] block w-full py-2 mt-1 rounded-[10px] px-3 text-sm"
              type={!show ? "text" : "password"}
            />

            {!show ? (
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
              >
                <EyeIcon />
              </span>
            ) : (
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[10px] top-[50%] translate-y-[-50%] cursor-pointer"
              >
                <EyeIconOpen />
              </span>
            )}
          </div>
          <div className="text-center">
            <a
              className="sm:text-[13px] text-[10px] font-normal text-[#0027B4] underline hover:text-[#FF5C00] transition-all duration-300 ease-in-out text-center sm:hidden"
              href="#"
            >
              Forgot password
            </a>
          </div>
          <button className="bg-[#FF5C00] rounded-[10px] text-white sm:py-[7px] py-[4px] px-5 w-full mt-7 font-bold hover:bg-transparent hover:text-[#FF5C00] border-[1px] border-transparent hover:border-[#FF5C00] transition-all duration-300 ease-in-out sm:text-[18px] text-base">
            LOGIN
          </button>
          <div className="sm:flex justify-between text-center sm:text-start sm:mt-2 mt-5">
            <label
              className="text-[#000000] opacity-77 sm:text-[18px] text-[13px] sm:font-medium font-bold"
              htmlFor=""
            >
              Not a member ?
            </label>
            <a
              className="sm:text-[18px] text-base font-normal text-[#0027B4] underline hover:text-[#FF5C00] transition-all duration-300 ease-in-out hidden sm:block"
              href="#"
            >
              Sign up
            </a>
            <button className="bg-[#FF5C00] sm:hidden rounded-[10px] text-white sm:py-[7px] py-[4px] px-5 w-full font-bold hover:bg-transparent hover:text-[#FF5C00] border-[1px] border-transparent hover:border-[#FF5C00] transition-all duration-300 ease-in-out sm:text-[18px] text-base">
              REGISTER
            </button>
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
