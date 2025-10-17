import { Theme, useTheme } from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

interface NewTagProps {
  style?: ViewStyle;
}

export const NewTag = ({ style }: NewTagProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>NOUVEAU</Text>
    </View>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#EF483A",
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 10,
      fontWeight: "600",
      color: "#FFFFFF",
      textTransform: "uppercase",
    },
  });
