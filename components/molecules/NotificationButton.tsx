import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { BellIcon } from "@/components/icons/BellIcon";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { ViewStyle } from "react-native";

interface NotificationButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export const NotificationButton = ({
  onPress,
  style,
  disabled = false,
}: NotificationButtonProps) => {
  const theme = useTheme();

  return (
    <ButtonIcon onPress={onPress} style={style} disabled={disabled}>
      <BellIcon color={theme.icon} />
    </ButtonIcon>
  );
};
