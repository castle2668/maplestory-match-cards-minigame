import React from "react";

import ModeToggle from "@/components/ModeToggle";

const Navbar: React.FC = () => {
  return (
    <nav className="border-double  border-b-2">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            <span className="text-maple-500">MapleStory</span>MatchCards
          </span>
        </a>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
