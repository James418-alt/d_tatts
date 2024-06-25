import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#857359] pt-[150px] pb-5">
      <div className="grid sm:grid-cols-3 md:grid-cols-5 gap-7 px-[80px]">
        <Image src={"/img1.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img2.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img4.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img5.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img6.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img7.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img8.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img9.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img10.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img11.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img12.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img13.jpg"} alt="#" width={300} height={300} />
        <Image src={"/img14.jpg"} alt="#" width={300} height={300} />
      </div>
    </div>
  );
};

export default Page;
