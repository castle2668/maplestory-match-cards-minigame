import React from "react";
import { Link } from "react-router-dom";

import ModeToggle from "@/components/ModeToggle";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-background opacity-80">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h1
            className="self-center text-2xl font-semibold whitespace-nowrap"
            data-testid="cypress-title"
          >
            <span className="text-primary">MapleStory</span>
            MatchCards
          </h1>
        </Link>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
