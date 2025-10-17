import { Theme, useTheme } from "@/hooks/useTheme";
import React from "react";
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface TextButtonProps {
  children: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
}

export const TextButton = ({
  children,
  onPress,
  style,
  textStyle,
  disabled = false,
}: TextButtonProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF",
      borderWidth: 1,
      borderColor: "#0870E6",
      borderRadius: 4,
      paddingHorizontal: 16,
      paddingVertical: 12,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 16,
      fontWeight: "600",
      color: "#0870E6",
      textAlign: "center",
    },
  });
