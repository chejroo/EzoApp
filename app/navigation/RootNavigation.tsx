import { Stack } from "expo-router";

export default function RootNavigator() {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
