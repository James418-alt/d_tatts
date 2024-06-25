import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#7f6748] h-[190px] px-[80px] flex items-center ">
      <div className="flex md:flex-row gap-4 md:justify-between sm:pt-7 sm-[850px]:flex-col  w-[100vw]">
        <div className="text-white font-sans text-[23px] font-bold">
          <h2>DORAN TATTOO</h2>
          <h4 className="text-[20px]">BY APPOINTMENT ONLY</h4>
        </div>
        <div className="text-white font-sans text-[23px] font-bold">
          <h2>Follow</h2>
          <Link className="underline font-light text-[20px]" href="#">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
