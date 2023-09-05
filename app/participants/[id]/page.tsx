"use client";
import BackNavigation from "@/app/components/BackNavigation";
import ParticipantDetailsItem from "@/app/components/ParticipantDetailsItem";
import useParticipantById from "@/hooks/useParticipantById";

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
      <BackNavigation to="./" />
      <div className="py-3"></div>
      <h1 className="text-2xl font-semibold py-3">Participant Detail</h1>
      {!data && <div>No Detail Found!</div>}
      {data && <ParticipantDetailsItem data={data} />}
    </div>
  );
};

export default ParticipantDetail;
