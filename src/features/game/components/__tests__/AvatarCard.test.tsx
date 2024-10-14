import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AvatarCard from "../AvatarCard";

describe("AvatarCard", () => {
  it("should render the AvatarCard component", () => {
    const props = {
      playerImage: "https://www.example.com/image.png",
      playerName: "Player 1",
      current: true,
      turns: 5,
      score: 10,
    };

    render(<AvatarCard {...props} />);

    expect(screen.getByAltText(props.playerName)).toBeInTheDocument();
    expect(screen.getByAltText(props.playerName)).toHaveAttribute(
      "src",
      props.playerImage
    );
    expect(screen.getByText(props.playerName)).toBeInTheDocument();
    expect(screen.getByText(`Turns: ${props.turns}`)).toBeInTheDocument();
    expect(screen.getByText(`${props.score}`)).toBeInTheDocument();
  });
});
