import { TextLink } from "@/components/atoms/TextLink";
import { NotificationButton } from "@/components/molecules/NotificationButton";
import { ProfileButton } from "@/components/molecules/ProfileButton";
import { NavigationTabs } from "@/components/organisms/NavigationTabs";
import { Theme, useTheme } from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, View } from "react-native";

interface HeaderProps {
  onLoginPress?: () => void;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
  onTabChange?: (activeTab: string) => void;
}

export const Header = ({
  onLoginPress,
  onNotificationPress,
  onProfilePress,
  onTabChange,
}: HeaderProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerActions}>
          <TextLink onPress={onLoginPress} color="#FFFFFF">
            Me connecter
          </TextLink>
          <View style={styles.iconContainer}>
            <NotificationButton onPress={onNotificationPress} />
            <ProfileButton onPress={onProfilePress} />
          </View>
        </View>
        <NavigationTabs onTabChange={onTabChange} />
      </View>
    </View>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      backgroundColor: "#12509F",
      marginTop: -64,
      paddingTop: 96,
      paddingHorizontal: 16,
      paddingBottom: 24,
      justifyContent: "flex-end",
    },
    content: {
      width: "100%",
      gap: 18,
    },
    headerActions: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },
    iconContainer: {
      flexDirection: "row",
      gap: 8,
      alignItems: "center",
    },
  });
