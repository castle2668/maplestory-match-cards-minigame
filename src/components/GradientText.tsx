import React from "react";

interface GradientTextProps {
  text: string;
}

const GradientText: React.FC<GradientTextProps> = (props) => {
  const { text } = props;

  return (
    <div className="bg-gradient-to-br from-maple-500 via-maple-400 to-maple-300 inline-block text-transparent bg-clip-text text-3xl">
      {text}
    </div>
  );
};

export default GradientText;
