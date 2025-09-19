import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";
import "@testing-library/jest-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

// Mock submitAPI
vi.mock("../api", () => ({
  submitAPI: vi.fn(() => true),
}));


const mockTimes = ["17:00", "18:00", "19:00"];

describe("BookingForm", () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renders all booking form fields", () => {
    render(
      <MemoryRouter>
        <BookingForm time={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    // Radio buttons
    expect(screen.getByLabelText(/indoor setting/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/outdoor setting/i)).toBeInTheDocument();

    // Other fields (custom dropdowns)
    expect(screen.getByText(/date/i)).toBeInTheDocument();
    expect(screen.getByText(/No of Diners/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Occasion/i)).toHaveLength(2);
    expect(screen.getByText(/Select Time/i)).toBeInTheDocument();

    // Submit button
    expect(screen.getByRole("button", { name: /reserve now/i })).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    render(
      <MemoryRouter>
        <BookingForm time={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

     const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /reserve now/i }));


  expect(await screen.findByText("Date is required")).toBeInTheDocument();
  expect(await screen.findByText("Please select a time")).toBeInTheDocument();
  expect(await screen.findByText("Occasion is required")).toBeInTheDocument();
  });

  test("submits form with valid data", async () => {
    render(
      <MemoryRouter>
        <BookingForm time={mockTimes} dispatch={mockDispatch} />
      </MemoryRouter>
    );

    const user = userEvent.setup();

    // Select Location
    await user.click(screen.getByLabelText(/indoor setting/i));

    // Pick date
    await user.type(screen.getByLabelText(/date/i), "2025-09-20");

    // Open time dropdown and choose 18:00
    await user.click(screen.getByText(/Select Time/i));
    await user.click(screen.getByText("18:00"));

    // Open guests dropdown and pick 3
    await user.click(screen.getByText(/No of Diners/i));
    await user.click(screen.getByText("3 Diners"));



    // Submit
    await user.click(screen.getByRole("button", { name: /reserve now/i }));


  });
});
