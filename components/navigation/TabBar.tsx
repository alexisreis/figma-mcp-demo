import { Theme, useTheme } from "@/hooks/useTheme";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CartIcon } from "../icons/CartIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { ProductsIcon } from "../icons/ProductsIcon";
import { PromotionsIcon } from "../icons/PromotionsIcon";
import { SearchIcon } from "../icons/SearchIcon";

export const TabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel?.toString() ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const icon = (name: string, color: string) => {
          switch (name) {
            case "index":
              return <HomeIcon color={color} />;
            case "search":
              return <SearchIcon color={color} />;
            case "products":
              return <ProductsIcon color={color} />;
            case "promotions":
              return <PromotionsIcon color={color} />;
            case "cart":
              return <CartIcon color={color} />;
            default:
              return null;
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >
            {icon(route.name, isFocused ? theme.primaryColor : theme.icon)}
            <Text
              style={{
                color: isFocused ? theme.primaryColor : theme.icon,
                fontSize: 10,
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    tabBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: theme.background,
      height: 80,
      paddingHorizontal: 16,
      paddingBottom: 20,
    },
    tabItem: {
      alignItems: "center",
      gap: 4,
    },
  });
