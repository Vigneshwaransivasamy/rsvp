import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import AgeReport from "../AgeReport";

describe("AgeReport", () => {
  it("renders the age groups with labels and values", async () => {
    const mockAge = {
      "0": 5,
      "1": 10,
      "2": 15,
    };
    const mockLabel = ["0-10", "11-20", "21-30"];

    const { getByText, container } = render(
      <AgeReport age={mockAge} label={mockLabel} />
    );

    const ageReportElement = container.querySelector("section");

    expect(ageReportElement).toBeInTheDocument();

    expect(getByText("Age 0-10")).toBeInTheDocument();
    expect(getByText("5")).toBeInTheDocument();
    expect(getByText("Age 11-20")).toBeInTheDocument();
    expect(getByText("10")).toBeInTheDocument();
    expect(getByText("Age 21-30")).toBeInTheDocument();
    expect(getByText("15")).toBeInTheDocument();
  }, 2000);
});
