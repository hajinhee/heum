import { useColorScheme } from "@/hooks/useColorScheme";
import { Stack } from "expo-router";

export default function MainLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // 헤더 공통 기본 스타일
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "#1F2937" : "#FFFFFF",
        },
        headerTintColor: colorScheme === "dark" ? "#FFFFFF" : "#111827",
        headerTitleStyle: {
          fontWeight: "600",
        },
      }}
    >
      {/* 탭 네비게이션 */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      {/* 기록 관련 화면들 */}
      <Stack.Screen
        name="record/create"
        options={{
          title: "수영 기록 추가",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="record/[date]"
        options={{
          title: "수영 기록 상세",
        }}
      />
      <Stack.Screen
        name="record/edit/[id]"
        options={{
          title: "기록 수정",
        }}
      />

      {/* 검색 화면 */}
      <Stack.Screen
        name="search/pool"
        options={{
          title: "수영장 검색",
        }}
      />
    </Stack>
  );
}
