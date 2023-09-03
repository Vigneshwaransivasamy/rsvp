"use client";

import { useForm } from "react-hook-form";
import { Participant } from "@/typings/modals/Participants";
import { Input } from "../components/Input";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

const RegistrationForm = (): React.JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<Participant>();

  const [submissionStatus, setSubmissionStatus] = useState<boolean | null>(
    null
  );

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      console.log(isDirty, "added");
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, [isDirty]);

  const onSubmit = (data: Participant) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch("https://invygo-rsvp.free.beeceptor.com/participants", requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      })
      .then((data) => {
        setSubmissionStatus(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="registration-form relative max-w-lg pb-3">
      <Link href="./">
        <div className="flex gap-2 items-center content-center">
          <FaArrowLeft></FaArrowLeft>
          <span>Back</span>
        </div>
      </Link>
      <h2 className="text-2xl py-3">Registration Form</h2>
      {submissionStatus && (
        <div className="text-green-500">RSVP added successfully!</div>
      )}
      {!submissionStatus && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="Name:"
            {...register("name", {
              required: { value: true, message: "Name is required" },
              maxLength: {
                value: 20,
                message: "Name should not exceed 20 characters",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Name should only have alphabetic characters",
              },
            })}
            error={errors.name?.message}
          ></Input>
          <Input
            type="number"
            label="Age:"
            {...register("age", {
              required: { value: true, message: "Age is required" },
              min: { value: 13, message: "Age cannot be lesser than 13" },
              max: { value: 99, message: "Age connot be greater than 99" },
            })}
            error={errors.age?.message}
          ></Input>
          <Input
            type="date"
            label="Date of Birth:"
            {...register("dob", {
              required: { value: true, message: "Date of birth is required" },
            })}
            error={errors.dob?.message}
          ></Input>

          <div className="flex flex-col">
            <label className="py-2 text-xs font-semibol">Profession:</label>
            <select
              className="h-12 text-black rounded-lg px-3"
              {...register("profession", {
                required: { value: true, message: "Profession is required" },
              })}
            >
              <option value="">Select Profession</option>
              <option value="Employed">Employed</option>
              <option value="Student">Student</option>
            </select>
            {errors.profession && (
              <span className="text-red-500 text-sm">
                {errors.profession.message}
              </span>
            )}
          </div>

          <Input
            type="text"
            label="Locality:"
            {...register("locality", {
              required: { value: true, message: "Locality is required" },
            })}
            error={errors.locality?.message}
          ></Input>

          <div className="flex flex-col">
            <label className="py-2 text-xs font-semibol">Address:</label>
            <textarea
              className="h-12 text-black rounded-lg px-3"
              maxLength={50}
              {...register("address", {
                required: { value: true, message: "Address is required" },
              })}
            ></textarea>
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address?.message}
              </span>
            )}
          </div>

          <Input
            type="number"
            label="Number of Guests:"
            {...register("numberOfGuests", {
              required: { value: true, message: "Guests count is required" },
              max: { value: 2, message: "Cannot accompany more then 2 guests" },
            })}
            error={errors.numberOfGuests?.message}
          ></Input>
          <div className="p-3"></div>
          <button
            type="submit"
            className="w-full rounded-lg h-10 px-2 bg-sky-700 color text-slate-100 text-center"
          >
            ADD
          </button>
          <div className="p-3"></div>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;
