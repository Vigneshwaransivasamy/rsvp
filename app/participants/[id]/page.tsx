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
      <h1 className="text-2xl py-3">Participant Detail</h1>
      {!data && <div>No Detail Found!</div>}
      {data && (
        <section className="py-2">
          <div className="flex">
            <div className="w-64">Name: </div>
            <div>{data?.name}</div>
          </div>
          <div className="flex">
            <div className="w-64">Age: </div>
            <div>{data?.age}</div>
          </div>
          <div className="flex">
            <div className="w-64">Date of Birth: </div>
            <div>{data?.dob}</div>
          </div>
          <div className="flex">
            <div className="w-64">Profession: </div>
            <div>{data?.profession}</div>
          </div>
          <div className="flex">
            <div className="w-64">Locality: </div>
            <div>{data?.locality}</div>
          </div>
          <div className="flex">
            <div className="w-64">Address: </div>
            <div>{data?.address}</div>
          </div>
          <div className="flex">
            <div className="w-64">Number of guests: </div>
            <div>{data?.numberOfGuests}</div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ParticipantDetail;
