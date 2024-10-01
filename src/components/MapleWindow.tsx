import React from "react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import MapleButton from "./MapleButton";

interface MapleWindowProps {
  children: React.ReactNode;
  size?: "sm" | "lg";
}

const MapleWindow: React.FC<MapleWindowProps> = (props) => {
  const { children, size = "lg" } = props;

  return (
    <Card
      className={cn(
        "w-96 border-2 rounded-sm border-gray-400",
        size === "lg" && "w-auto"
      )}
    >
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
      <CardFooter className="p-2">
        <MapleButton size="sm">SETTINGS</MapleButton>
      </CardFooter>
    </Card>
  );
};

export default MapleWindow;
