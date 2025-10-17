import { TabBar } from "@/components/navigation/TabBar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{ title: "Accueil" }} />
      <Tabs.Screen name="search" options={{ title: "Rechercher" }} />
      <Tabs.Screen name="products" options={{ title: "Mes produits" }} />
      <Tabs.Screen name="promotions" options={{ title: "Promotions" }} />
      <Tabs.Screen name="cart" options={{ title: "Panier" }} />
    </Tabs>
  );
}
