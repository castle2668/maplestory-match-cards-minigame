import React from "react";

import { cn } from "@/lib/utils";
import { Card } from "@/pages/Home";

interface SimpleCardProps {
  card: Card;
  handleChoice: (card: Card) => void;
  flipped: boolean;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  card,
  handleChoice,
  flipped,
}) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="relative">
      <img
        src={card.src}
        alt="card front"
        className={cn(
          "w-32 h-32 object-cover border-2  border-white rounded-md absolute",
          flipped ? "[transform:rotateY(0deg)]" : "[transform:rotateY(90deg)]"
        )}
      />
      <img
        src="/images/cover.jpeg"
        alt="card back"
        className="w-32 h-32 object-cover border-2  border-white rounded-md"
        onClick={handleClick}
      />
    </div>
  );
};

export default SimpleCard;
