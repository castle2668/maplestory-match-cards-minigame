import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import SimpleCard, { SimpleCardProps } from "../SimpleCard";

describe("SimpleCard", () => {
  it("should render the SimpleCard component", () => {
    const props: SimpleCardProps = {
      card: {
        id: 1,
        src: "https://www.example.com/image.png",
        matched: false,
        flipped: false,
      },
      handleChoice: vi.fn(),
      flipped: false,
      disabled: false,
      cardSource: "api",
    };

    render(<SimpleCard {...props} />);

    const cardFront = screen.getByAltText("card front");
    expect(cardFront).toBeInTheDocument();
    expect(cardFront).toHaveAttribute("src", props.card.src);

    const cardBack = screen.getByAltText("card back");
    expect(cardBack).toBeInTheDocument();
  });
});
