import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import useMusicStore from "@/features/music/store/musicStore";

const HomePage: React.FC = () => {
  const { allowAutoPlay } = useMusicStore();

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={allowAutoPlay}>
        <Link to="/game">Go to Game Page</Link>
      </Button>
      <Button>
        <Link to="/settings">Go to Settings</Link>
      </Button>
    </div>
  );
};

export default HomePage;
