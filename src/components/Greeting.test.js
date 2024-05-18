import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";
describe("Greeting component", () => {
  it("should load hello world as text", () => {
    // Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //assert
    const helloWorldElement = screen.getByText("hello world", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  it("should load good to see if button was not clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("good to see you", { exact: false });

    expect(outputElement).toBeInTheDocument();
  });
  it("should load 'Changed!' if the button was clicked ", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("changed!", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("good to see you ", { exact: false });
    expect(outputElement).toBeNull();
  });
});
