import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#857359] pt-[150px]">
      <div className="flex flex-col gap-5 p-[80px] justify-center items-center">
        <Image
          className="mb-9"
          src={"/deposit.jpeg"}
          alt="#"
          width={700}
          height={700}
        />
        <Image
          className="mb-5"
          src={"/aftercare.png"}
          alt="#"
          width={700}
          height={700}
        />
      </div>
    </div>
  );
};

export default Page;
