import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";

import GamePage from "../GamePage";
import HomePage from "../HomePage";

describe("HomePage", () => {
  it("should render game options when the page is loaded", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    const singlePlayer = screen.getByText(/Single Player/i);
    expect(singlePlayer).toBeInTheDocument();

    const multiPlayer = screen.getByText(/Multiple Player/i);
    expect(multiPlayer).toBeInTheDocument();
  });

  it("should render GamePage after clicking READY button", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </MemoryRouter>
    );

    const readyButton = screen.getByText(/READY/i);
    expect(readyButton).toBeInTheDocument();

    // fireEvent.click(readyButton);
    await act(async () => {
      fireEvent.click(readyButton);
    });

    expect(screen.getByText(/MAPLE MINIGAME/i)).toBeInTheDocument();
  });
});
