import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SearchBar from '../components/SearchBar';

describe("Search Bar component", () => {
  it("should display search bar", () => {
    render(<SearchBar />);
    screen.debug();
    const searchBar = screen.getByTestId("searchBar");
    expect(searchBar).toBeInTheDocument();
  }
)})