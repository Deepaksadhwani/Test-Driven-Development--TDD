import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

describe('Greeting component', () => {
    it("should load hello world as text", () => {
        // Arrange
        render(<Greeting />);
      
        //Act
        //...nothing
      
        //assert
        const helloWorldElement = screen.getByText("hello world", { exact: false });
        expect(helloWorldElement).toBeInTheDocument();
      });
})

