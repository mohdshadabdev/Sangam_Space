
import React from "react";

type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  gradient?: "blue-purple" | "orange-red" | "light-purple";
  className?: string;
};

const gradientMap = {
  "blue-purple": "bg-gradient-to-r from-neon-blue via-neon-purple to-neon-purple",
  "orange-red": "bg-gradient-to-r from-neon-orange via-neon-red to-neon-red",
  "light-purple": "bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400",
};

const GradientHeading = ({
  children,
  as: Comp = "h2",
  gradient = "blue-purple",
  className = "",
}: Props) => (
  <Comp
    className={`font-heading font-bold text-4xl md:text-5xl inline-block bg-clip-text text-transparent ${gradientMap[gradient]} ${className}`}
  >
    {children}
  </Comp>
);

export default GradientHeading;
