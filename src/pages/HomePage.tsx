import React from "react";
import { Link } from "react-router-dom";

import MapleButton from "@/components/MapleButton";
import MapleWindow from "@/components/MapleWindow";
import CoverImage from "@/features/game/assets/images/cover.png";
import MultiImage from "@/features/game/assets/images/multi.jpeg";
import { MODE } from "@/features/game/data/constants";
import { useGameStore } from "@/features/game/store/gameStore";
import { useMusicStore } from "@/features/music/store/musicStore";
import { cn } from "@/lib/utils";

const HomePage: React.FC = () => {
  const { mode, setMode } = useGameStore();
  const { allowAutoPlay } = useMusicStore();

  return (
    <MapleWindow size="sm">
      <div className="flex flex-col gap-10">
        {/* Game Options */}
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "flex items-end gap-4 bg-blue-200 p-2 cursor-pointer border-solid border-2 border-blue-200",
              mode === MODE.SINGLE && "border-solid border-2 border-maple-600"
            )}
            onClick={() => setMode(MODE.SINGLE)}
          >
            <img
              src={CoverImage}
              alt="MapleStory Mini Game Cover"
              className="w-24 h-20 object-cover border-solid border-2 border-gray-400"
            />
            <div>
              <h2 className="text-lg text-black">Match Cards</h2>
              <p className="text-md text-gray-700">Single Player</p>
            </div>
          </div>
          <div
            className={cn(
              "flex items-end gap-4 bg-blue-200 p-2 cursor-pointer border-solid border-2 border-blue-200",
              mode === MODE.MULTI && "border-solid border-2 border-maple-600"
            )}
            onClick={() => setMode(MODE.MULTI)}
          >
            <img
              src={MultiImage}
              alt="MapleStory Mini Game Cover"
              className="w-24 h-20 object-cover border-solid border-2 border-gray-400"
            />
            <div>
              <h2 className="text-lg text-black">Match Cards</h2>
              <p className="text-md text-gray-700">Multiple Player</p>
            </div>
          </div>
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
