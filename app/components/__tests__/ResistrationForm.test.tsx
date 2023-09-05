import "@testing-library/jest-dom";
import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import RegistrationForm from "../RegistrationForm";

beforeAll(() => {
  window.addEventListener = jest.fn();
  window.removeEventListener = jest.fn();
});

describe("RegistrationForm", () => {
  it("renders the form elements", () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    );

    const { getByLabelText, getByText } = render(<RegistrationForm />);

    expect(getByLabelText("Name:")).toBeInTheDocument();
    expect(getByLabelText("Age:")).toBeInTheDocument();
    expect(getByLabelText("Date of Birth:")).toBeInTheDocument();
    expect(getByLabelText("Profession:")).toBeInTheDocument();
    expect(getByLabelText("Locality:")).toBeInTheDocument();
    expect(getByLabelText("Address:")).toBeInTheDocument();
    expect(getByLabelText("Number of Guests:")).toBeInTheDocument();
    expect(getByText("ADD")).toBeInTheDocument();
  });

  it("submits the form successfully", async () => {
    const { getByLabelText, getByText, findByText } = render(
      <RegistrationForm />
    );

    fireEvent.change(getByLabelText("Name:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText("Age:"), { target: { value: "25" } });
    fireEvent.change(getByLabelText("Date of Birth:"), {
      target: { value: "2021-10-10" },
    });
    fireEvent.change(getByLabelText("Profession:"), {
      target: { value: "Employed" },
    });
    fireEvent.change(getByLabelText("Locality:"), {
      target: { value: "Dubai" },
    });
    fireEvent.change(getByLabelText("Address:"), {
      target: { value: "Al Safa 2" },
    });
    fireEvent.change(getByLabelText("Number of Guests:"), {
      target: { value: "1" },
    });

    fireEvent.click(getByText("ADD"));

    await waitFor(async () => {
      const successMessage = await findByText("RSVP added successfully!");
      expect(successMessage).toBeInTheDocument();
    });
  });

  it("handles form submission failure from server by exception", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({}),
      })
    );

    const { getByLabelText, getByText, findByText } = render(
      <RegistrationForm />
    );

    fireEvent.change(getByLabelText("Name:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText("Age:"), { target: { value: "25" } });
    fireEvent.change(getByLabelText("Date of Birth:"), {
      target: { value: "2021-10-10" },
    });
    fireEvent.change(getByLabelText("Profession:"), {
      target: { value: "Employed" },
    });
    fireEvent.change(getByLabelText("Locality:"), {
      target: { value: "Dubai" },
    });
    fireEvent.change(getByLabelText("Address:"), {
      target: { value: "Al Safa 2" },
    });
    fireEvent.change(getByLabelText("Number of Guests:"), {
      target: { value: "1" },
    });

    fireEvent.click(getByText("ADD"));

    await waitFor(async () => {
      const errorMessage = await findByText("Failed to add RSVP!");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("handles form submission failure", async () => {
    global.fetch = jest.fn(() => Promise.reject(new Error("Request failed")));

    const { getByLabelText, getByText, findByText } = render(
      <RegistrationForm />
    );

    fireEvent.change(getByLabelText("Name:"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(getByLabelText("Age:"), { target: { value: "25" } });
    fireEvent.change(getByLabelText("Date of Birth:"), {
      target: { value: "2021-10-10" },
    });
    fireEvent.change(getByLabelText("Profession:"), {
      target: { value: "Employed" },
    });
    fireEvent.change(getByLabelText("Locality:"), {
      target: { value: "Dubai" },
    });
    fireEvent.change(getByLabelText("Address:"), {
      target: { value: "Al Safa 2" },
    });
    fireEvent.change(getByLabelText("Number of Guests:"), {
      target: { value: "1" },
    });

    fireEvent.click(getByText("ADD"));

    await waitFor(async () => {
      const errorMessage = await findByText("Failed to add RSVP!");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("handles form validation", async () => {
    const { getByText, findByText } = render(<RegistrationForm />);

    fireEvent.click(getByText("ADD"));

    await waitFor(async () => {
      const errorMessage = await findByText("Name is required");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
