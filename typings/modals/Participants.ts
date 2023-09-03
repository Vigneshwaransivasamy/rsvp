export interface Participant {
  name: string;
  age: string;
  dob: string;
  profession: string;
  locality: string;
  numberOfGuests: number;
  address: string;
  guests: Guest[];
  id?: string;
}

export type Guest = Omit<Participant, "guests" | "numberOfGuests">;
