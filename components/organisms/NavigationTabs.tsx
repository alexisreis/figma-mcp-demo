import { Theme, useTheme } from "@/hooks/useTheme";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface NavigationTabsProps {
  onTabChange?: (activeTab: string) => void;
  initialTab?: string;
}

export const NavigationTabs = ({
  onTabChange,
  initialTab = "drive",
}: NavigationTabsProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "drive" ? styles.activeTab : styles.inactiveTab,
        ]}
        onPress={() => handleTabPress("drive")}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "drive"
              ? styles.activeTabText
              : styles.inactiveTabText,
          ]}
        >
          Drive & Livraison
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          activeTab === "magasin" ? styles.activeTab : styles.inactiveTab,
        ]}
        onPress={() => handleTabPress("magasin")}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.tabText,
            activeTab === "magasin"
              ? styles.activeTabText
              : styles.inactiveTabText,
          ]}
        >
          Magasin
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      padding: 8,
      borderRadius: 8,
      justifyContent: "space-between",
    },
    tab: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    activeTab: {
      backgroundColor: "#12509F",
    },
    inactiveTab: {
      backgroundColor: "#FFFFFF",
    },
    tabText: {
      fontFamily: "Ubuntu",
      fontSize: 16,
      fontWeight: 700,
      textAlign: "center",
    },
    activeTabText: {
      color: "#FFFFFF",
    },
    inactiveTabText: {
      color: "#121212",
    },
  });
