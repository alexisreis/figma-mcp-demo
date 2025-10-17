import { Theme, useTheme } from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity } from "react-native";

interface TextLinkProps {
  children: string;
  onPress?: () => void;
  style?: TextStyle;
  disabled?: boolean;
  color?: string;
}

export const TextLink = ({
  children,
  onPress,
  style,
  disabled = false,
  color,
}: TextLinkProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  const linkColor = color || theme.primaryColor;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} activeOpacity={0.7}>
      <Text style={[styles.text, { color: linkColor }, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    text: {
      textDecorationLine: "underline",
      fontSize: 16,
      fontFamily: "Ubuntu",
      fontWeight: 700,
    },
  });
