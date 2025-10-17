
import { Theme } from "@/hooks/useTheme";
import React from "react";
import { Svg, Path } from "react-native-svg";

interface HomeIconProps {
  color: string;
}

export const HomeIcon = ({ color }: HomeIconProps) => {
  return (
    <Svg width="20" height="22" viewBox="0 0 20 22" fill="none">
      <Path
        d="M16.6 21.0003H3.40003C3.08385 21.0003 2.77078 20.9378 2.47881 20.8164C2.18684 20.6951 1.92174 20.5172 1.69872 20.2931C1.4757 20.0689 1.29917 19.803 1.17926 19.5104C1.05936 19.2178 0.998449 18.9044 1.00003 18.5883V7.33226C1.00003 6.95026 1.18003 6.59826 1.48003 6.36726L9.26003 1.24126C9.46742 1.0847 9.72018 1 9.98003 1C10.2399 1 10.4926 1.0847 10.7 1.24126L18.52 6.36726C18.82 6.59826 19 6.95026 19 7.33226V18.5883C19.0016 18.9044 18.9407 19.2178 18.8208 19.5104C18.7009 19.803 18.5244 20.0689 18.3013 20.2931C18.0783 20.5172 17.8132 20.6951 17.5213 20.8164C17.2293 20.9378 16.9162 21.0003 16.6 21.0003Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <Path
        d="M7.80003 11.0003H12.2C12.64 11.0003 13 11.3603 13 11.8003V21.0003H7.00003V11.8003C7.00003 11.3603 7.36003 11.0003 7.80003 11.0003Z"
        stroke={color}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
