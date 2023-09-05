import { Participant } from "@/typings/modals/Participants";
import React from "react";

const ParticipantDetailsItem = ({ data }: { data: Participant }) => {
  return (
    <section className="p-4 py-6 max-w-xl shadow-md rounded-md bg-white dark:bg-transparent dark:shadow-none dark:border dark:border-sky-400">
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Name: </div>
        <div className="text-sm">{data?.name}</div>
      </div>
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Age: </div>
        <div className="text-sm">{data?.age}</div>
      </div>
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Date of Birth: </div>
        <div className="text-sm">{data?.dob}</div>
      </div>
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Profession: </div>
        <div className="text-sm">{data?.profession}</div>
      </div>
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Locality: </div>
        <div className="text-sm">{data?.locality}</div>
      </div>
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Address: </div>
        <div className="text-sm">{data?.address}</div>
      </div>
      <div className="flex flex-col pb-2">
        <div className="font-semibold">Number of guests: </div>
        <div className="text-sm">{data?.numberOfGuests}</div>
      </div>
    </section>
  );
};

export default ParticipantDetailsItem;
