import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";

import { Participant } from "@/typings/modals/Participants";
import ParticipantDetailsItem from "../ParticipantDetailsItem";

describe("ParticipantDetailsItem", () => {
  const sampleParticipant: Participant = {
    name: "John Doe",
    age: "30",
    dob: "1993-05-15",
    profession: "Employed",
    locality: "New York",
    address: "123 Main St",
    numberOfGuests: 2,
  };

  it("renders the participant's name", () => {
    const { getByText } = render(
      <ParticipantDetailsItem data={sampleParticipant} />
    );

    const nameElement = getByText("Name:");
    const nameValueElement = getByText("John Doe");

    expect(nameElement).toBeInTheDocument();
    expect(nameValueElement).toBeInTheDocument();

    const ageElement = getByText("Age:");
    const ageValueElement = getByText("30");

    expect(ageElement).toBeInTheDocument();
    expect(ageValueElement).toBeInTheDocument();

    const dobElement = getByText("Date of Birth:");
    const dobValueElement = getByText("1993-05-15");

    expect(dobElement).toBeInTheDocument();
    expect(dobValueElement).toBeInTheDocument();
  });
});
