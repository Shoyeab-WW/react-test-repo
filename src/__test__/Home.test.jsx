import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

test("renders home page heading", () => {
  render(<Home />);
  const heading = screen.getByText(/Welcome/i);
  expect(heading).toBeInTheDocument();
});
