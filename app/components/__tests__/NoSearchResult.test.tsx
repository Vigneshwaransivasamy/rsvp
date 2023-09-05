import "@testing-library/jest-dom";
import * as React from "react";
import { render } from "@testing-library/react";
import NoSearchResults from "../NoSearchResults";

describe("NoSearchResults", () => {
  it("renders the NoSearchResults component with the provided search text", () => {
    const searchText = "Sample Search Text";
    const screen = render(<NoSearchResults searchText={searchText} />);
    const noResultsText = screen.getByText(`"${searchText}"`);

    expect(noResultsText).toBeInTheDocument();
  });

  it("truncates long search text to 20 characters followed by '...'", () => {
    const longSearchText =
      "This is a very long search text that should be truncated";
    const screen = render(<NoSearchResults searchText={longSearchText} />);
    const noResultsText = screen.getByText(
      `"${longSearchText.slice(0, 20)}..."`
    );

    expect(noResultsText).toBeInTheDocument();
  });

  it("doesn't truncate short search text", () => {
    const shortSearchText = "Short Text";
    const screen = render(<NoSearchResults searchText={shortSearchText} />);
    const noResultsText = screen.getByText(`"${shortSearchText}"`);

    expect(noResultsText).toBeInTheDocument();
  });
});
