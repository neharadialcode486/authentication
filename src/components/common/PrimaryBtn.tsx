import React from "react";

interface PrimaryBtnProps {
  text: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text }) => (
  <button
    type="submit"
    className="bg-[#FF5C00] rounded-[10px] text-white sm:py-[7px] py-[4px] px-5 w-full  font-bold hover:bg-transparent hover:text-[#FF5C00] border-[1px] border-transparent hover:border-[#FF5C00] transition-all duration-300 ease-in-out sm:text-[18px] text-base"
  >
    {text}
  </button>
);

export default PrimaryBtn;
