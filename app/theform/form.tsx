"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export const ContactUs = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();
    Swal.fire("Appointment Booked!").then(() => {
      emailjs
        .sendForm("service_rxl0z3q", "template_r0r6dyz", e.target, {
          publicKey: "ze6gls6mLOd7CHNBm",
        })
        .then(
          () => {
            console.log("Done");

            window.location.reload();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    });
  };

  return (
    <div className="pt-[110px]">
      <h1 className="text-center font-bold font-sans text-[#7f6748] sm:text-[20px] md:text-[30px]">
        Request An Appointment
      </h1>
      <form onSubmit={sendEmail} className="p-[40px] flex flex-col gap-8">
        <div className="font-sans ">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Desired Artist: <span>{"(required)"}</span>
          </label>
          <div className="my-4">
            <p>Select who you'd like to book an appointment with.</p>
            <h4>
              {
                "(PLEASE NOTE THAT IF NO ARTISTS ARE LISTED THE STUDIO IS NOT CURRENTLY ACCEPTING REQUESTS FOR APPOINTMENTS.)"
              }
            </h4>
          </div>

          <select
            className="border bg-gray-100 border-black p-5 w-[100%]"
            name="artists"
            id="0"
          >
            <option>Doran</option>
          </select>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col w-[49%]">
            <label className="text-[18px] text-black">First Name</label>
            <input
              className="my-2 border bg-gray-100 border-black p-5"
              type="text"
              name="first_name"
            />
          </div>
          <div className="flex flex-col w-[49%]">
            <label className="text-[18px] text-black">Last Name</label>
            <input
              className="my-2 border bg-gray-100 border-black p-5 "
              type="text"
              name="last_name"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Pronounce
          </label>
          <input
            className="my-4 border bg-gray-100 border-black p-5 "
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Your Email {"(required)"}
          </label>
          <input
            className="my-4 border bg-gray-100 border-black p-5 "
            type="text"
            name="email"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Your Phone {"(required)"}
          </label>
          <input
            className="my-4 border bg-gray-100 border-black p-5 "
            type="text"
            name="phone"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Date
          </label>
          <p className="my-4">
            Please let us know your preferred date to be tattooed.
          </p>
          <p>
            If you don't have a specific date in mind, select your preferred
            month to be tattooed.
          </p>
          <input
            name="date"
            className="border bg-gray-100 border-black p-5 "
            type="date"
          />
        </div>
        <div>
          <h3>Your Tattoo Idea</h3>

          <div className="flex flex-col">
            <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
              Idea: {"(required)"}
            </label>
            <textarea
              className="my-4 border bg-gray-100 border-black p-5"
              name=""
              id=""
            ></textarea>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Size: {"(required)"}
          </label>
          <input
            className="my-4 border bg-gray-100 border-black p-5 "
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Location: {"(required)"}
          </label>
          <p className="my-4">
            Where is this tattoo going to be located on your body?
          </p>
          <p>
            If there are other tattoos surrounding the area please let us know!
          </p>
          <input className="border bg-gray-100 border-black p-5 " type="text" />
        </div>

        <div>
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Black and Gray or Colour
          </label>
          <select
            className="my-4 border bg-gray-100 border-black p-5 w-[100%]"
            value={""}
          >
            <option>Black and Grey</option>
            <option>Colour</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-[#7f6748] font-semibold font-sans text-[22px]">
            Budget: {"(required)"}
          </label>
          <p className="my-4">
            Please let us know if you have a desired budget for the tattoo.
          </p>
          <p>
            We are able to provide ballpark quotes once we have an idea of the
            design.
          </p>
          <input
            name="budget"
            className="border bg-gray-100 border-black p-5 "
            type="text"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="p-[20px] border-[2px] font-sans font-semibold text-[20px] rounded-md border-[#7f6748] hover:bg-[#7f6748] hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
