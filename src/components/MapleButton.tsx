import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

interface MapleButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "lg";
  onClick?: () => void;
}

const MapleButton: React.FC<MapleButtonProps> = (props) => {
  const { children, disabled = false, size = "lg", onClick } = props;

  return (
    <Button
      className={cn(
        "bg-orange-500 hover:bg-orange-600 border-black border-2 text-lg h-auto py-0 px-2 font-sans",
        disabled &&
          "bg-gray-500 hover:bg-gray-500 text-gray-300 cursor-not-allowed",
        size === "sm" && "text-sm",
        size === "lg" && "text-lg"
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default MapleButton;
