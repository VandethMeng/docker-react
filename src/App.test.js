import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Next react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/next react living code/i);
  expect(linkElement).toBeInTheDocument();
});
