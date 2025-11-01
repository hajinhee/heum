import { NotificationItem } from "@/types/notification";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 알림 메시지 타입에 따른 아이콘 이름, 색깔 반환 값
const getNotificationIconProps = (type: string) => {
  switch (type) {
    case "follow":
      return { name: "person-add-outline", color: "#4285EA" } as const;
    case "like":
      return { name: "heart-outline", color: "#FF3B30" } as const;
    case "goal":
      return { name: "flag-outline", color: "#000000" } as const;
    case "badge":
      return { name: "medal-outline", color: "#FFD700" } as const;
    case "comment":
      return { name: "chatbox-outline", color: "#000000" } as const;
    case "ranking":
      return { name: "trophy-outline", color: "#FFD700" } as const;
    default:
      return { name: "notifications-outline", color: "#B0B0B0" } as const;
  }
};

// 안 읽은 메세지 dummyData -> API 호출하기
const dummyData: NotificationItem[] = [
  {
    id: 1,
    type: "follow",
    sender: "은행동 돌고래",
    content: "님이 회원님을 팔로우하기 시작했습니다.",
    targetId: 123,
    createdAt: "2025-10-18T05:18:00Z",
    isRead: false,
  },
  {
    id: 2,
    type: "like",
    sender: "초록마을 물개",
    content: "님이 회원님의 게시물에 좋아요를 눌렀습니다.",
    targetId: 456,
    createdAt: "2025-10-18T05:19:30Z",
    isRead: false,
  },
  {
    id: 3,
    type: "goal",
    sender: "옥련동 다람쥐",
    content: "님이 '주간 10km 달리기' 목표를 달성했습니다.",
    targetId: 789,
    createdAt: "2025-10-18T06:00:00Z",
    isRead: false,
  },
  {
    id: 4,
    type: "badge",
    sender: "송도 호랑이",
    content: "님이 '첫 완주' 배지를 획득했습니다.",
    targetId: 12,
    createdAt: "2025-10-16T06:05:00Z",
    isRead: false,
  },
  {
    id: 5,
    type: "comment",
    sender: "장의동 거북이",
    content: '님이 회원님의 게시물에 댓글을 남겼습니다: "화이팅!"',
    targetId: 345,
    createdAt: "2025-10-15T07:10:15Z",
    isRead: false,
  },
];

const extractDate = (dateString: string): string => {
  return dateString.substring(0, 10).replace(/-/g, ".");
};

const groupNotificationsByDate = (notifications: NotificationItem[]) => {
  const grouped = notifications.reduce((acc, item) => {
    const date = extractDate(item.createdAt);

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(item);
    return acc;
  }, {} as Record<string, NotificationItem[]>);

  return Object.keys(grouped).map((date) => ({
    title: date,
    data: grouped[date],
  }));
};

// 알림 카드
const NotificationCard = React.memo(({ item }: { item: NotificationItem }) => {
  const { type, sender, content, createdAt } = item;
  const iconProps = getNotificationIconProps(type);

  return (
    <TouchableOpacity style={styles.card}>
      <Ionicons
        name={iconProps.name}
        size={24}
        color={iconProps.color}
        style={styles.icon}
      />
      <View style={styles.contentWrapper}>
        <Text style={styles.bodyText}>
          <Text style={styles.senderText}>{sender}</Text>
          {content}
        </Text>
        <Text style={styles.timeText}>
          {dayjs(createdAt).format("hh:mm A")}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

export default function Notifications() {
  const sections = groupNotificationsByDate(dummyData);
  return (
    <View style={styles.container}>
      <SectionList
        style={styles.sectionList}
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationCard item={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  sectionList: {
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 10,
    fontSize: 12,
    color: "#888",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#F3F3F3",
    borderRadius: 16,
    padding: 16,
    marginBottom: 5,
  },
  icon: {
    marginRight: 8,
  },
  contentWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bodyText: {
    lineHeight: 20,
    color: "#111827",
    flexShrink: 1,
  },
  senderText: {
    fontWeight: "bold",
    marginRight: 4,
  },
  timeText: {
    fontSize: 10,
    color: "#888",
    marginLeft: 10,
  },
});
