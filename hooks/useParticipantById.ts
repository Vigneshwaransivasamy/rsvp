import { Participant } from "@/typings/modals/Participants";
import { useFetchWithStatus } from "./useFetchWithStatus";

// export default () =>
//   useFetchWithStatus<Participant[]>(
//     "https://invygo-rsvp.free.beeceptor.com/participants"
//   );

export default (id: string) =>
  useFetchWithStatus<Participant>(
    `http://localhost:3000/api/participants/${id}`
  );
