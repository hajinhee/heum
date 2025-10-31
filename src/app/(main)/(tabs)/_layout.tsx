import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, Text, TouchableOpacity, View } from "react-native";

function Icon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome style={{ marginBottom: 5 }} size={24} {...props} />;
}

const NotificationIcon = () => (
  <TouchableOpacity
    onPress={() => console.log("알림 클릭")}
    style={{ padding: 5 }}
  >
    <Ionicons name="notifications-outline" size={24} color="black" />
  </TouchableOpacity>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const localProfileImage = require("@/assets/images/pofile.png");
  const userProfileImageSource = localProfileImage;
  const hasProfileImage = !!userProfileImageSource;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#4285EA",
        tabBarInactiveTintColor: "#B0B0B0",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#1F2937" : "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: colorScheme === "dark" ? "#374151" : "#E5E7EB",
          height: 80,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
          headerTitle: "",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              {/* 알림 버튼 */}
              <NotificationIcon />

              {/* 프로필 사진 */}
              <TouchableOpacity onPress={() => console.log("프로필 클릭")}>
                {hasProfileImage ? (
                  <Image
                    source={userProfileImageSource}
                    style={{ width: 50, height: 50, borderRadius: 25 }}
                  />
                ) : (
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      backgroundColor: "#4185EA",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      청
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: "white",
          },
          headerTransparent: false,
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "통계",
          tabBarIcon: ({ color }) => <Icon name="bar-chart" color={color} />,
          headerTitle: "통계",
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <NotificationIcon />
            </View>
          ),
          headerTransparent: false,
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "피드",
          tabBarIcon: ({ color }) => <Icon name="hashtag" color={color} />,
          headerTitle: "피드",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <NotificationIcon />
              <TouchableOpacity onPress={() => console.log("검색 클릭")}>
                <Ionicons name="search-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerTransparent: false,
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="rank"
        options={{
          title: "랭킹",
          tabBarIcon: ({ color }) => <Icon name="trophy" color={color} />,
          headerTitle: "랭킹",
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
              }}
            >
              <NotificationIcon />
              <TouchableOpacity onPress={() => console.log("필터 클릭")}>
                <Ionicons name="options-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),
          headerTransparent: false,
          headerShadowVisible: false,
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: "마이",
          tabBarIcon: ({ color }) => <Icon name="user" color={color} />,
          headerTitle: "",
          headerRight: () => (
            <View
              style={{
                marginRight: 16,
              }}
            >
              <TouchableOpacity onPress={() => console.log("프로필 설정 클릭")}>
                <Ionicons name="settings-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ),

          // headerStyle: {
          //   backgroundColor: "white",
          // },
          // headerTransparent: false,
          // headerShadowVisible: false,
          headerTransparent: true,
        }}
      />
    </Tabs>
  );
}
