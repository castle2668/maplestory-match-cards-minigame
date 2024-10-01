import React from "react";

interface AvatarCardProps {
  playerImage: string;
  playerName: string;
}

const AvatarCard: React.FC<AvatarCardProps> = (props) => {
  const { playerImage, playerName } = props;

  return (
    <div className="bg-blue-200 mb-1">
      <img
        src={playerImage}
        alt={playerName}
        className="w-32 h-32 object-cover object-top p-2"
      />
      <p className="bg-sky-700 text-center">{playerName}</p>
    </div>
  );
};

export default AvatarCard;
