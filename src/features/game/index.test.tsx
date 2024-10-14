import { act, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import GameFeatures from "./index";

describe("GameFeatures", () => {
  it("should render Skeleton when the cards array is empty", async () => {
    await act(async () => {
      render(<GameFeatures />);
    });

    const skeletonCards = screen.getAllByTestId("skeleton-card");
    expect(skeletonCards).toHaveLength(30);
  });
});
