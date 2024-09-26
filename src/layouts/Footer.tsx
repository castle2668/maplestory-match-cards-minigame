import React from "react";

const startYear = 2021;
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-texture h-36 bg-repeat-x text-white flex items-center justify-center text-center">
      <div>
        Copyright © {startYear}-{currentYear}{" "}
        <a
          href="https://github.com/castle2668"
          className="underline hover:text-maple-600"
        >
          Sean Huang
        </a>
        . All rights reserved.
        <br />
        All images and other content related to MapleStory are owned by Nexon
        Corporation.
      </div>
    </footer>
  );
};

export default Footer;
