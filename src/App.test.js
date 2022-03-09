import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Counter component test suite", () => {
  test("displays the heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toBe("COUNTER");
  });

  test("increment button works", () => {
    render(<App />);
    const count = screen.getByTestId("count");
    const incrementBtn = screen.getByTestId("increment");
    expect(count.textContent).toBe("0");
    fireEvent.click(incrementBtn);
    expect(count.textContent).toBe("1");
  });

  test("decrement button works", () => {
    render(<App />);
    const count = screen.getByTestId("count");
    const decrementBtn = screen.getByTestId("decrement");
    expect(count.textContent).toBe("0");
    fireEvent.click(decrementBtn);
    expect(count.textContent).toBe("-1");
  });
});
