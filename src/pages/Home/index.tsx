import React from "react";

import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        MapleStroy Match Cards Mini Game
      </h1>
      <Button variant="outline" className="mt-8">
        Start Game
      </Button>
      <div className="flex mt-8">
        <img src="/card1.jpeg" alt="Card 1" className="w-32 h-32 mx-2" />
        <img src="/card1.jpeg" alt="Card 1" className="w-32 h-32 mx-2" />
        <img src="/card2.jpeg" alt="Card 2" className="w-32 h-32 mx-2" />
        <img src="/card2.jpeg" alt="Card 2" className="w-32 h-32 mx-2" />
      </div>
    </div>
  );
};

export default Home;
