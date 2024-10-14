import React from "react";

import { cn } from "@/lib/utils";

import CoverImage from "../assets/images/cover.png";
import { Card } from "../interfaces";
import { playClickSound } from "../utils/sounds";

export interface SimpleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
  cardSource: "api" | "local";
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
  cardSource,
}) => {
  const handleClick = () => {
    if (!disabled) {
      playClickSound();
      handleChoice(card);
    }
  };

  return (
    <div className="relative">
      <div
        className={cn(
          "p-0.5 border-2 border-gray-500 rounded-md shadow-md absolute",
          "[transform:rotateY(90deg)] transition-all ease-in duration-200",
          flipped && "[transform:rotateY(0deg)] delay-200"
        )}
      >
        <img
          src={card.src}
          alt="card front"
          className={cn(
            "w-16 h-24 object-cover object-left-top rounded-sm bg-maple-200",
            cardSource === "api" && "object-left"
          )}
        />
      </div>
      <div
        className={cn(
          "p-0.5 border-2 border-gray-500 rounded-md shadow-md",
          "[transform:rotateY(0deg)] transition-all ease-in duration-200 delay-200",
          flipped && "[transform:rotateY(90deg)] delay-0",
          disabled && "cursor-not-allowed"
        )}
      >
        <img
          src={CoverImage}
          alt="card back"
          className="w-16 h-24 object-cover object-center rounded-sm"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default SimpleCard;
