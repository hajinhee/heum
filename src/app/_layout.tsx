import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
// import 'react-native-reanimated';

import { useColorScheme } from "@/hooks/useColorScheme";

import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "global.css";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(onboarding)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const isFirstTime = true;
  const isLoggedIn = false;
  const authenticationReady = true;

  useEffect(() => {
    // 폰트 로드가 완료된 후에만 경로 확인 로직 실행
    if (authenticationReady) {
      if (isFirstTime) {
        // 1. 온보딩이 필요하면 온보딩 화면으로 이동
        router.replace("/(onboarding)");
      } else if (isLoggedIn) {
        // 2. 온보딩 완료 & 로그인 상태면 메인 화면으로 이동
        router.replace("/(main)/(tabs)");
      } else {
        // 3. 온보딩 완료 & 로그아웃 상태면 인증(로그인) 화면으로 이동
        router.replace("/(auth)");
      }
    }
  }, [authenticationReady, isFirstTime, isLoggedIn]); // 상태 변경 시 재실행

  return (
    <GluestackUIProvider mode="dark">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          {/* 온보딩 화면 */}
          <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />

          {/* 인증 화면 */}
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />

          {/* 메인 화면 (탭 포함) */}
          <Stack.Screen name="(main)" options={{ headerShown: false }} />

          {/* 모달 */}
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
