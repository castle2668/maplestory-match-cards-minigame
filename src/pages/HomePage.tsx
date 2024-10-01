import React from "react";
import { Link } from "react-router-dom";

import MapleButton from "@/components/MapleButton";
import MapleWindow from "@/components/MapleWindow";
import CoverImage from "@/features/game/assets/images/cover.jpeg";
import useMusicStore from "@/features/music/store/musicStore";

const HomePage: React.FC = () => {
  const { allowAutoPlay } = useMusicStore();

  return (
    <MapleWindow size="sm">
      <div className="flex flex-col gap-10">
        {/* Game Options */}
        <div className="flex items-end gap-2 bg-blue-200 p-2">
          <img
            src={CoverImage}
            alt="MapleStory Mini Game Cover"
            className="w-24 h-20 object-cover border-solid border-2 border-gray-400"
          />
          <h2 className="text-lg text-black">Match Cards</h2>
        </div>
        <div className="flex justify-end">
          <MapleButton onClick={allowAutoPlay}>
            <Link to="/game">READY!!</Link>
          </MapleButton>
        </div>
      </div>
    </MapleWindow>
  );
};

export default HomePage;
