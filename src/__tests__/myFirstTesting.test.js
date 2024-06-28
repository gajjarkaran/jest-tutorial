import App from "../App";
import { render, screen } from "@testing-library/react";

describe("App.js component", () => {
  test("renders logo in App Component", () => {
    render(<App />);
    const image = screen.getByAltText("logo");
    expect(image).toBeInTheDocument();
  });

    test("renders List.js component in app", () => {
      render(<App />);
      const textInListJS = screen.getByText(/This is a list/i);
      expect(textInListJS).toBeInTheDocument();
    });
});

describe("List.js component", () => {
  test("example", () => {});
});
