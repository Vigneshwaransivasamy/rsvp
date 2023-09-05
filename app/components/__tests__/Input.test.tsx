import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "../Input";

describe("Input component", () => {
  it("renders label and input element", () => {
    const { getByLabelText } = render(<Input label="Name:" name="name" />);

    const nameLabel = getByLabelText("Name:");
    const inputElement = getByLabelText("Name:");

    expect(nameLabel).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("displays an error message when error prop is provided", () => {
    const { getByText } = render(
      <Input label="Age" name="age" error="Age is required" />
    );

    const errorElement = getByText("Age is required");

    expect(errorElement).toBeInTheDocument();
  });

  it("passes input value correctly", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <Input
        label="Email:"
        name="email"
        value="test@example.com"
        onChange={onChangeMock}
      />
    );

    const inputElement = getByLabelText("Email:");

    expect(inputElement).toHaveValue("test@example.com");

    fireEvent.change(inputElement, {
      target: { value: "newemail@example.com" },
    });

    expect(onChangeMock).toHaveBeenCalled();
  });
});
