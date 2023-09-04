"use client";
import useParticipantById from "@/hooks/useParticipantById";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ParticipantDetail = ({ params }: { params: { id: string } }) => {
  const { loading, error, data } = useParticipantById(params.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="relative mx-auto">
      <Link href="./">
        <div className="flex gap-2 items-center content-center">
          <FaArrowLeft></FaArrowLeft>
          <span>Back</span>
        </div>
      </Link>
      <div className="py-3"></div>
      <h1 className="text-2xl font-semibold py-3">Participant Detail</h1>
      {!data && <div>No Detail Found!</div>}
      {data && (
        <section className="p-4 py-6 max-w-xl shadow-md rounded-md bg-white dark:bg-transparent dark:shadow-none dark:border dark:border-sky-400">
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Name: </div>
            <div>{data?.name}</div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Age: </div>
            <div>{data?.age}</div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Date of Birth: </div>
            <div>{data?.dob}</div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Profession: </div>
            <div>{data?.profession}</div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Locality: </div>
            <div>{data?.locality}</div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Address: </div>
            <div>{data?.address}</div>
          </div>
          <div className="flex flex-col pb-2">
            <div className="font-semibold">Number of guests: </div>
            <div>{data?.numberOfGuests}</div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ParticipantDetail;
