import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export enum ETheme {
  LIGHT = "light",
  DARK = "dark",
}
export type Theme = typeof Colors.light & typeof Colors.dark;

export function useTheme(): Theme {
  const colorScheme = useColorScheme();
  const theme: ETheme = colorScheme === "dark" ? ETheme.DARK : ETheme.LIGHT;

  return Colors[theme];
}
