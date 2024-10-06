import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import MainLayout from "../MainLayout";

describe("MainLayout", () => {
  it("should render heading when the page is loaded", () => {
    render(
      <MemoryRouter>
        <MainLayout children={<div>Test</div>} />
      </MemoryRouter>
    );

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/MapleStory/i);
  });
});
