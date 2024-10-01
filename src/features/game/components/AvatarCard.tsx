import React from "react";

import GradientText from "@/components/GradientText";
import { cn } from "@/lib/utils";

interface AvatarCardProps {
  playerImage: string;
  playerName: string;
  current: boolean;
  turns: number;
  score: number;
}

const AvatarCard: React.FC<AvatarCardProps> = (props) => {
  const { playerImage, playerName, current, turns, score } = props;

  return (
    <div className="w-full">
      <div
        className={cn(
          "bg-blue-200 mb-1 flex flex-col items-center border-2 border-blue-200",
          current && "border-2 border-maple-500"
        )}
      >
        <img
          src={playerImage}
          alt={playerName}
          className="w-32 h-32 object-cover object-top p-2"
        />
        <p className="w-full bg-sky-700 text-center text-black">{playerName}</p>
      </div>
      <div className="border border-gray-400 px-2 py-1 flex justify-between">
        <GradientText text={`${score}`} />
        <p className="text-right">Turns: {turns}</p>
      </div>
    </div>
  );
};

export default AvatarCard;
