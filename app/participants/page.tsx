"use client";

import useParticipants from "@/hooks/useParticipants";
import React, { useState } from "react";
import ParticipantItem from "../components/ParticipantItem";
import NoSearchResults from "../components/NoSearchResults";
import BackNavigation from "../components/BackNavigation";

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
      <BackNavigation to="./" />
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
      {!filterdData?.length && <NoSearchResults searchText={searchText} />}
      {!!filterdData?.length && (
        <div
          style={{ maxHeight: "578px" }}
          className="h-px-600 w-96 overflow-y-scroll"
        >
          {filterdData?.map((participant) => (
            <ParticipantItem key={participant.name} participant={participant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Participants;
