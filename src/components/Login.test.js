import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
jest.useFakeTimers();

// Login header
test("renders Authenticate text", () => {
  render(<Login />);
  const Text = screen.getByText(/Authenticate/i);
  expect(Text).toBeInTheDocument();
});

// Login User Input
test("username input should be rendered", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/username/i);
  expect(userInput.value).toBe("");
});

test("username input should be change", () => {
  render(<Login />);
  const userInput = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInput, { target: { value: testValue } });
  expect(userInput.value).toBe(testValue);
});

// Login Password Input
test("password input should be rendered", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput).toBeInTheDocument();
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  expect(passwordInput.value).toBe("");
});

test("password input should be change", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passwordInput, { target: { value: testValue } });
  expect(passwordInput.value).toBe(testValue);
});

// login Button
test("login button should be rendered", () => {
  render(<Login />);
  const button = screen.getByTestId("login-button");
  expect(button).toBeInTheDocument();
});

test("login button should be disabled", () => {
  render(<Login />);
  const button = screen.getByTestId("login-button");
  expect(button).toBeDisabled();
});

test("login button should not be disabled when username and password have text", () => {
  render(<Login />);

  const button = screen.getByTestId("login-button");
  const testValue = "test";

  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });

  expect(button).not.toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const button = screen.getByTestId("login-button");
  expect(button).not.toHaveTextContent(/Please Wait/i);
});

test("loading should be rendered on click", () => {
  render(<Login />);

  const button = screen.getByTestId("login-button");
  const testValue = "test";

  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);
  expect(button).toHaveTextContent(/Please Wait/i);
});

test("loading should not be rendered after fetching", async () => {
  render(<Login />);

  const button = screen.getByTestId("login-button");
  const testValue = "test";

  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);

  jest.advanceTimersByTime(3000);
  await waitFor(() => expect(button).not.toHaveTextContent(/Please Wait/i));
});

// login user
test("user should be rendered after fetching", async () => {
  render(<Login />);

  const button = screen.getByTestId("login-button");
  const testValue = "test";

  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);

  jest.advanceTimersByTime(3000);
  await waitFor(() => {
    const showUser = screen.getByTestId("display-username");
    expect(showUser).toBeInTheDocument();
  });
});
