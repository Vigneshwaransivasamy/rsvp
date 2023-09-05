import { Participant } from "@/typings/modals/Participants";
import Link from "next/link";
import React from "react";

const ParticipantItem = ({ participant }: { participant: Participant }) => {
  return (
    <Link role="link" href={`participants/${participant.id}`}>
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
  );
};

export default ParticipantItem;
