import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { expect, test } from "vitest";

test("renders home page heading", () => {
  render(<Home />);
  const heading = screen.getByText(/Welcome/i);
  expect(heading).toBeInTheDocument();
});
