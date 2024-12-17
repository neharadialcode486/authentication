import React from "react";

interface PrimaryBtnProps {
  text: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ text }) => (
  <button
    type="submit"
    className="bg-primary rounded-[10px] text-white py-[7px] px-5 w-full  font-bold hover:bg-transparent hover:text-primary border-[1px] border-transparent hover:border-primary smoothness sm:text-md text-base"
  >
    {text}
  </button>
);

export default PrimaryBtn;
