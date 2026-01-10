import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Card from "../components/Card";


describe("Card component", () => {
  it("should display card with Eastenders title, image, genre and link", () => {
    render(<Card 
            key = {"1"}
            imageUrl={"https://static.tvmaze.com/uploads/images/medium_portrait/6/15519.jpg"} 
            title = {"Eastenders"}
            genres = {"Drama"}
            showId = {793}
            />);
    //screen.debug();
    expect(screen.getByTestId("cardTitle")).toHaveTextContent("Eastenders");
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://static.tvmaze.com/uploads/images/medium_portrait/6/15519.jpg");
    expect(screen.getByText("Drama")).toBeInTheDocument();
    expect(screen.getByRole("link", {name : "Details"})).toHaveAttribute("href", "/detail/793");
  }
)})