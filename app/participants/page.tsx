"use client";

import useParticipants from "@/hooks/useParticipants";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import React, { useState } from "react";

const Participants = () => {
  const { loading, error, data } = useParticipants();

  const [searchText, setSearchText] = useState<string>("");

  const filterdData = !!searchText.length
    ? data?.filter(
        (record) =>
          record.name.includes(searchText) ||
          record.locality.includes(searchText)
      )
    : data;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!loading && !error && !data?.length) {
    return <div>No Participants added yet!</div>;
  }

  return (
    <div className="relative mx-auto">
      <Link href="./">
        <div className="flex gap-2 items-center content-center">
          <FaArrowLeft></FaArrowLeft>
          <span>Back</span>
        </div>
      </Link>
      <div className="py-2"></div>
      <h1 className="text-2xl font-semibold">Search Participants</h1>
      <div className="py-3 sticky">
        <input
          className="rounded-md h-10 w-96 ps-3 outline-none text-black"
          type="search"
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search name, locality"
        ></input>
      </div>
      {!filterdData?.length && (
        <div className="text-center w-96 pt-10">
          No Results found for{" "}
          <span className="font-semibold">
            {searchText.length < 20
              ? `"${searchText}"`
              : `"${searchText.slice(0, 20)}..."`}
          </span>
        </div>
      )}
      {!!filterdData?.length && (
        <div
          style={{ maxHeight: "578px" }}
          className="h-px-600 w-96 overflow-y-scroll"
        >
          {filterdData?.map((participant) => (
            <Link
              key={participant.name}
              href={`participants/${participant.id}`}
            >
              <div className="flex text-sm mb-2 rounded-md p-2 gap-3 m-auto cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                <div className="flex bg-sky-700 rounded-full w-10 justify-center items-center text-white">
                  {participant.name
                    .split(" ")
                    .map((name) => name.charAt(0).toUpperCase())
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <div className="font-semibold">{participant.name}</div>
                  <div className="text-xs">{participant.locality}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Participants;
