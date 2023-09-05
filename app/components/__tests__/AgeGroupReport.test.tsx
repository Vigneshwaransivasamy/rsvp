import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import AvgGroupReport from "../AgeGroupReport";

describe("AvgGroupReport", () => {
  it("calculates and renders the average group count", () => {
    const mockNumberOfGuests = {
      "0": 1,
      "1": 1,
      "2": 1,
    };

    const { getByText, container } = render(
      <AvgGroupReport numberOfGuests={mockNumberOfGuests} />
    );

    const avgGroupReportElement = container.querySelector("section");
    const expectedAvgCount = 2;
    const avgCountElement = getByText(expectedAvgCount.toFixed(2));

    expect(avgGroupReportElement).toBeInTheDocument();
    expect(avgCountElement).toBeInTheDocument();
  });
});
