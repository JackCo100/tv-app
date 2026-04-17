import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "./Card";


describe("Card component", () => {
  it("should display card with Eastenders title, image, genre and link", () => {
    render(<Card 
            key = {"1"}
            imageUrl={"src\components\Card\tests\placeholder.png"} 
            title = {"Eastenders"}
            genres = {"Drama"}
            showId = {793}
            />);
    //screen.debug();
    expect(screen.getByTestId("cardTitle")).toHaveTextContent("Eastenders");
    expect(screen.getByRole("img")).toHaveAttribute("src", "src\components\Card\tests\placeholder.png");
    expect(screen.getByText("Drama")).toBeInTheDocument();
    expect(screen.getByRole("link", {name : "Details"})).toHaveAttribute("href", "/detail/793");
  }
)})