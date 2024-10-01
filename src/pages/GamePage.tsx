import React from "react";

import MapleWindow from "@/components/MapleWindow";
import Game from "@/features/game";

const GamePage: React.FC = () => {
  return (
    <MapleWindow>
      <Game />
    </MapleWindow>
  );
};

export default GamePage;
