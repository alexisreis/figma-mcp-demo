import { Header } from "@/components/organisms/Header";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView>
      <Header
        onLoginPress={() => {}}
        onNotificationPress={() => {}}
        onProfilePress={() => {}}
        onTabChange={(tab) => console.log("Tab changed to:", tab)}
      />
    </SafeAreaView>
  );
}
