import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface MapleWindowProps {
  children: React.ReactNode;
}

const MapleWindow: React.FC<MapleWindowProps> = (props) => {
  const { children } = props;

  return (
    <Card className="w-auto border-2 rounded-sm border-gray-400">
      <CardHeader className="bg-blue-200 border-solid border-b-2 border-gray-400 p-1">
        <CardTitle className="flex gap-1 items-center">
          <Avatar className="w-5 h-5">
            <AvatarImage src="/favicon.ico" />
          </Avatar>
          <p className="text-lg font-normal text-black">MATCH CARDS</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="border-solid border-b-2 border-gray-400 py-2 px-4">
        {children}
      </CardContent>
      <CardFooter className="p-2 justify-center">
        <div>
          Copyright © 2024{" "}
          <a
            href="https://github.com/castle2668"
            className="underline hover:text-maple-600"
          >
            Sean Huang
          </a>
          . All rights reserved.
        </div>
      </CardFooter>
    </Card>
  );
};

export default MapleWindow;
