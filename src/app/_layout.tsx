import { ProfileStatsProvider } from "@/providers/gameStatsProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ProfileStatsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="web/[id]" options={{ headerBackTitle: 'Back'}} />
      </Stack>
    </ProfileStatsProvider>
  )
}