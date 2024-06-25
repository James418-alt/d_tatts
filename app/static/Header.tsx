"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiCancel, GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(false);
  return (
    <div className="fixed w-[100vw]">
      <div className="bg-[#7f6748] h-[140px] px-[80px] flex justify-between items-center">
        <div>
          <Image
            className="rounded-full"
            src={"/doran.jpeg"}
            alt="#"
            width={100}
            height={100}
          ></Image>
        </div>
        <div className="md:visible lg:hidden">
          {show ? (
            <GiHamburgerMenu
              onClick={() => {
                setShow(!show);
              }}
              className="text-white w-10 h-10"
            />
          ) : (
            <GiCancel
              onClick={() => {
                setShow(!show);
              }}
              className="text-white w-10 h-10"
            />
          )}
        </div>

        <div className="flex gap-[130px] md:hidden lg:visible sm:hidden ">
          <div className="text-white text-[23px] font-sans flex gap-10 items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/ourwork"}>Some of our Works</Link>
            <Link href={"/policies"}>Policies</Link>
          </div>

          <Link
            href={"/theform"}
            className="bg-inherit border-[3px] border-white p-[20px] rounded-md text-white font-bold font-sans hover:bg-white hover:text-[#7f6748]"
          >
            Request an Appointment
          </Link>
        </div>
      </div>

      <div
        className={
          show
            ? `hidden `
            : `flex flex-col gap-10 bg-[#7f6748] p-[20px] text-white text-[23px] font-sans float-right w-[100%] h-[100vh] `
        }
      >
        <Link
          onClick={() => {
            setShow(true);
          }}
          href={"/"}
        >
          Home
        </Link>
        <Link
          onClick={() => {
            setShow(true);
          }}
          href={"/ourwork"}
        >
          Some of our Works
        </Link>
        <Link
          onClick={() => {
            setShow(true);
          }}
          href={"/policies"}
        >
          Policies
        </Link>
        <Link
          onClick={() => {
            setShow(true);
          }}
          href={"/theform"}
          className="bg-inherit border-[3px] border-white p-[20px] rounded-md text-white font-bold font-sans hover:bg-white hover:text-[#7f6748] w-[70%]"
        >
          Request an Appointment
        </Link>
      </div>
    </div>
  );
};

export default Header;
