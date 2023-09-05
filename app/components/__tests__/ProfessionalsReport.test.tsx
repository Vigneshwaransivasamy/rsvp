import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import ProfessionalsReport from "../ProfessionalsReport";

const mockProfessionData: Record<string, number> = {
  Employed: 4,
  Student: 4,
};

describe("ProfessionalsReport", () => {
  it("calculates and renders profession data", () => {
    const { getByText, container } = render(
      <ProfessionalsReport profession={mockProfessionData} />
    );

    const professionalsReportElement = container.querySelector("section");
    const professionLabels = Object.keys(mockProfessionData);
    const professionValues = Object.values(mockProfessionData);

    expect(professionalsReportElement).toBeInTheDocument();

    professionLabels.forEach((label) => {
      const labelElement = getByText(label);
      expect(labelElement).toBeInTheDocument();
    });

    const totalValue = Object.values(mockProfessionData).reduce(
      (total, value) => total + (value ?? 0),
      0
    );

    professionLabels.forEach((label: string, index: number) => {
      const width = `${((mockProfessionData[label] * 100) / totalValue).toFixed(
        2
      )}%`;
      const barElement = container.querySelector("section > div > div");
      const valueElement = container.querySelector("section > div > span");
      expect(valueElement).toHaveTextContent(`${professionValues[index]}`);
      expect(barElement).toHaveStyle(`width: ${width}`);
    });
  });
});
