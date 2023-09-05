import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import NavLink from "../NavLink";

describe("NavLink", () => {
  it("renders the link with icon and label", () => {
    const mockIcon = <span>Mock Icon</span>;
    const mockLabel = "Sample Link";
    const mockTo = "/sample-link";

    const { getByText, container } = render(
      <NavLink to={mockTo} icon={mockIcon} label={mockLabel} />
    );

    const linkElement = container.querySelector("a");

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockTo);

    const iconElement = getByText("Mock Icon");
    const labelElement = getByText("Sample Link");

    expect(iconElement).toBeInTheDocument();
    expect(labelElement).toBeInTheDocument();
  });
});
