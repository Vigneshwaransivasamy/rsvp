import participants from "@/data/participants";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const participant = participants.find(
    (participant) => participant.id.toString() === id
  );

  if (participant) {
    return new Response(JSON.stringify(participant), {
      status: 200,
    });
  }

  return new Response(
    JSON.stringify({
      error: {
        message: "Participant not found!",
      },
    }),
    {
      status: 400,
    }
  );
}
