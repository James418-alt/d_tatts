import Image from "next/image";
import React from "react";
import img from "../public/bg.jpeg";
import img2 from "../public/doran.jpeg";

const Page = () => {
  return (
    <div>
      <Image className="pt-[120px] w-full" src={img2} alt="#" />
    </div>
  );
};

export default Page;
