
import React from "react";
import { Svg, Path } from "react-native-svg";

interface SearchIconProps {
  color: string;
}

export const SearchIcon = ({ color }: SearchIconProps) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M2 0.5H18C18.3978 0.5 18.7792 0.658149 19.0605 0.939453C19.3419 1.22076 19.5 1.60218 19.5 2V18C19.5 18.3978 19.3419 18.7792 19.0605 19.0605C18.7792 19.3419 18.3978 19.5 18 19.5H2C1.1929 19.5 0.5 18.8206 0.5 18V2L0.507812 1.85156C0.541951 1.50826 0.693366 1.18554 0.939453 0.939453C1.22076 0.658149 1.60218 0.5 2 0.5ZM1.5 18.5H6.5V13.5H1.5V18.5ZM7.5 18.5H12.5V13.5H7.5V18.5ZM13.5 18.5H18.5V13.5H13.5V18.5ZM1.5 12.5H6.5V7.5H1.5V12.5ZM7.5 12.5H12.5V7.5H7.5V12.5ZM13.5 12.5H18.5V7.5H13.5V12.5ZM1.5 6.5H6.5V1.5H1.5V6.5ZM7.5 6.5H12.5V1.5H7.5V6.5ZM13.5 6.5H18.5V1.5H13.5V6.5Z"
        fill={color}
        stroke={color}
      />
    </Svg>
  );
};
