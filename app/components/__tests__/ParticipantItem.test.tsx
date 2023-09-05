import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";

import { Participant } from "@/typings/modals/Participants";
import ParticipantItem from "../ParticipantItem";

describe("ParticipantItem component", () => {
  const sampleParticipant: Participant = {
    id: "1",
    name: "John Doe",
    age: "30",
    dob: "1992-08-15",
    profession: "Employed",
    locality: "New York",
    numberOfGuests: 2,
    address: "123 Main Street, Apartment 4B",
  };

  it("renders participant details and link", () => {
    const screen = render(<ParticipantItem participant={sampleParticipant} />);

    const nameElement = screen.getByText("John Doe");
    const localityElement = screen.getByText("New York");

    expect(nameElement).toBeInTheDocument();
    expect(localityElement).toBeInTheDocument();

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "participants/1");
  });

  it("displays participant initials in a circle", () => {
    const screen = render(<ParticipantItem participant={sampleParticipant} />);

    const initialsCircle = screen.getByText("JD");
    expect(initialsCircle).toBeInTheDocument();
  });
});
