import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 3 frameworks", () => {
  render(<App />);
  const lists = screen.getAllByTestId("framework-name");
  expect(lists.length).toEqual(3);
});

test("sum should be 7", () => {
  render(<App />);
  const title = screen.getByTitle("sum");
  expect(title.textContent).toEqual("7");
});
