import { colors, tabBarIconSize } from "@/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabLayout () {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: colors.surface, minHeight: 56 + useSafeAreaInsets().bottom }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Games',
          tabBarIcon: ({ color}) => <Ionicons name="home" color={color as string} size={tabBarIconSize} />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color}) => <Ionicons name="person" color={color as string} size={tabBarIconSize} />
        }}
      />
    </Tabs>
  )
}