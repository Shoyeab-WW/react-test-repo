import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../App";

test("renders Vite text", () => {
  render(<App />);
  expect(screen.getByText(/vite/i)).toBeInTheDocument();
});
