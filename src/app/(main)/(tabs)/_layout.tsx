import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useClientOnlyValue } from '@/hooks/useClientOnlyValue';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#3B82F6', // 파란색
        tabBarInactiveTintColor: '#9CA3AF', // 회색
        tabBarStyle: {
          backgroundColor: colorScheme === 'dark' ? '#1F2937' : '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: colorScheme === 'dark' ? '#374151' : '#E5E7EB',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '홈',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerTitle: '대시보드',
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: '통계',
          tabBarIcon: ({ color }) => <TabBarIcon name="bar-chart" color={color} />,
          headerTitle: '수영 통계',
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: '기록',
          tabBarIcon: ({ color }) => <TabBarIcon name="hashtag" color={color} />,
          headerTitle: '수영 기록',
        }}
      />
      <Tabs.Screen
        name="rank"
        options={{
          title: '랭킹',
          tabBarIcon: ({ color }) => <TabBarIcon name="trophy" color={color} />,
          headerTitle: '랭킹',
        }}
      />
      <Tabs.Screen
        name="my"
        options={{
          title: '마이',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerTitle: '마이페이지',
        }}
      />
    </Tabs>
  );
}
