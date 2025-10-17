import { ButtonIcon } from "@/components/atoms/ButtonIcon";
import { CartIcon } from "@/components/icons/CartIcon";
import { useTheme } from "@/hooks/useTheme";
import React from "react";
import { ViewStyle } from "react-native";

interface ProfileButtonProps {
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}

export const ProfileButton = ({
  onPress,
  style,
  disabled = false,
}: ProfileButtonProps) => {
  const theme = useTheme();

  return (
    <ButtonIcon onPress={onPress} style={style} disabled={disabled}>
      <CartIcon color={theme.icon} />
    </ButtonIcon>
  );
};
