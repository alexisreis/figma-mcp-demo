import React from "react";
import { Path, Svg } from "react-native-svg";

interface BellIconProps {
  color: string;
}

export const BellIcon = ({ color }: BellIconProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 2C13.1 2 14 2.9 14 4C14 4.74 13.6 5.39 13 5.73V7C13 9.76 15.24 12 18 12H18.5C19.33 12 20 12.67 20 13.5S19.33 15 18.5 15H5.5C4.67 15 4 14.33 4 13.5S4.67 12 5.5 12H6C8.76 12 11 9.76 11 7V5.73C10.4 5.39 10 4.74 10 4C10 2.9 10.9 2 12 2ZM10 17H14C14 18.1 13.1 19 12 19S10 18.1 10 17Z"
        fill={color}
      />
    </Svg>
  );
};
