import { Theme, useTheme } from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

interface ButtonIconProps {
  onPress?: () => void;
  style?: ViewStyle;
  children: React.ReactNode;
  disabled?: boolean;
}

export const ButtonIcon = ({
  onPress,
  style,
  children,
  disabled = false,
}: ButtonIconProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: theme.buttonBackground,
      justifyContent: "center",
      alignItems: "center",
      padding: 8,
    },
  });
