import React from "react";

import { cn } from "@/lib/utils";

import { Card } from "..";
import CoverImage from "../assets/images/cover.jpeg";

interface SimpleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
  disabled: boolean;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  card,
  handleChoice,
  flipped,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="relative">
      <img
        src={card.src}
        alt="card front"
        className={cn(
          "w-32 h-32 object-cover border-2  border-white rounded-md [transform:rotateY(90deg)] transition-all ease-in duration-200 absolute",
          flipped && "[transform:rotateY(0deg)] delay-200"
        )}
      />
      <img
        src={CoverImage}
        alt="card back"
        className={cn(
          "w-32 h-32 object-cover border-2  border-white rounded-md [transform:rotateY(0deg)] transition-all ease-in duration-200 delay-200",
          flipped && "[transform:rotateY(90deg)] delay-0",
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        )}
        onClick={handleClick}
      />
    </div>
  );
};

export default SimpleCard;
