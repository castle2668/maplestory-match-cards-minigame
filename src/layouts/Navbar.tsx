import React from "react";
import { Link } from "react-router-dom";

import ModeToggle from "@/components/ModeToggle";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background opacity-80 border-double border-b-4 border-maple-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="text-primary">MapleStory</span>
            MatchCards
          </span>
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
