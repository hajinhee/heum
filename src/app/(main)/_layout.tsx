import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { router, Stack } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function MainLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // 헤더 공통 기본 스타일
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
        headerTintColor: "#111827",
        headerTitleStyle: {
          fontWeight: "600",
        },
      }}
    >
      {/* 탭 네비게이션 */}
      <Stack.Screen
        name="(tabs)"
        options={{
          title: "",
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

      {/* 알림 목록 화면 */}
      <Stack.Screen
        name="notifications"
        options={{
          title: "알림",
          headerTitle: "알림",

          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => router.back()} activeOpacity={1}>
          //     <Ionicons name="chevron-back" size={26} color="black" />
          //   </TouchableOpacity>
          // ),
          headerRight: () => (
            <View>
              <TouchableOpacity
                onPress={() => router.push("/(main)/settings/notifications")}
              >
                <Ionicons name="settings-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerShadowVisible: false,
        }}
      ></Stack.Screen>

      {/* 알림 설정 화면 */}
      <Stack.Screen
        name="settings/notifications"
        options={{
          title: "알림 설정",
          headerTitle: "알림 설정",

          // headerLeft: () => (
          //   <TouchableOpacity onPress={() => router.back()} activeOpacity={1}>
          //     <Ionicons name="chevron-back" size={26} color="black" />
          //   </TouchableOpacity>
          // ),

          headerShadowVisible: false,
        }}
      ></Stack.Screen>
    </Stack>
  );
}
