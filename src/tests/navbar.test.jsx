import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import NavBar from "../Components/Navbar";

describe("Navbar component", () => {
  it("should navbar", () => {
    render(<NavBar />);
    screen.debug(); 
    const navBar = screen.getByTestId("navbar");
    expect(navBar).toBeInTheDocument();
  }
)})