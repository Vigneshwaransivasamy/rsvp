import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import BackNavigation from "../BackNavigation";

describe("BackNavigation", () => {
  it("renders the BackNavigation component", () => {
    const screen = render(<BackNavigation to="/some-page" />);
    const backButton = screen.getByText("Back");

    expect(backButton).toBeInTheDocument();
  });

  it("navigates to the specified URL when clicked", () => {
    const { container, getByText } = render(<BackNavigation to="/some-page" />);
    const backButton = getByText("Back");

    fireEvent.click(backButton);

    const anchorElement = container.querySelector("a");
    expect(anchorElement).toHaveAttribute("href", "/some-page");
  });
});
