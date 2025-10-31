import { Text, View } from "@/components/common/Themed";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type FeedItem = {
  id: number;
  nickname: string;
  email: string;
  content: string;
  likes: number;
  comments: number;
  profileUri: string;
};

function FeedCard({ item }: { item: FeedItem }) {
  return (
    <View style={feedCardStyles.card}>
      <View style={feedCardStyles.header}>
        {/* 아바타 */}
        <Avatar size="md">
          <AvatarFallbackText>{item.nickname}</AvatarFallbackText>
          {/* <AvatarImage
            source={{ uri: item.profileUri }}
          /> */}
          <AvatarImage source={require("@/assets/images/profile.png")} />
        </Avatar>

        {/* 사용자 정보 */}
        <View style={feedCardStyles.userInfo}>
          <Text style={feedCardStyles.nickname}>{item.nickname}</Text>
          <Text style={feedCardStyles.email}>{item.email}</Text>
        </View>

        {/* 옵션 버튼 */}
        <TouchableOpacity onPress={() => console.log("옵션")}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#E7E7E7" />
        </TouchableOpacity>
      </View>

      {/* 피드 내용 */}
      <View style={feedCardStyles.content}>
        <Text style={feedCardStyles.bodyText} numberOfLines={undefined}>
          {item.content}
        </Text>
      </View>

      {/* 좋아요/댓글 버튼 */}
      <View style={feedCardStyles.footer}>
        <TouchableOpacity style={feedCardStyles.actionButton}>
          <Ionicons name="heart" size={14} color="#EE685A" />
          <Text style={feedCardStyles.likesCount}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={feedCardStyles.actionButton}>
          <Ionicons name="chatbubble" size={14} color="#6B7280" />
          <Text style={feedCardStyles.commentsCount}>{item.comments}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const feedCardStyles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F3F3F3",
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
    gap: 10,
  },
  tempAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#90EE90",
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
    marginRight: 10,
  },
  nickname: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 12,
    color: "#B0B0B0",
  },
  content: {
    marginBottom: 15,
  },
  bodyText: {
    lineHeight: 22,
    color: "#111827",
  },
  footer: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 8,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  likesCount: {
    fontSize: 12,
    marginLeft: 5,
    color: "#EE685A",
  },
  commentsCount: {
    fontSize: 12,
    marginLeft: 5,
    color: "#6B7280",
  },
});

// 무한 스크롤링을 위한 더미 데이터 생성 함수 -> 실제 API 호출로 변경해야 함
const fetchData = (page: number): FeedItem[] => {
  const pageSize = 10; // 최초 로드 개수
  return Array.from({ length: pageSize }, (_, i) => {
    const globalIndex = (page - 1) * pageSize + i;
    const nickname = "청학동 수달";
    const email = "user@example.com";
    const content = `이번 주에 총 12.4km를 수영하면서 드디어 1등을 차지했어요 🏊‍♂️💦 꾸준히 하니까 점점 기록이 쌓이는 게 보이네요. 다음 주에도 도전! 💪 같이 수영하실 분 있나요? 🌊`;
    const likes = 15;
    const comments = 3;
    const profileUri = "";

    return {
      id: globalIndex,
      nickname: nickname,
      email: email,
      content: content,
      likes: likes,
      comments: comments,
      profileUri: profileUri,
    };
  }).reverse();
};
export default function FeedScreen() {
  const [data, setData] = useState<FeedItem[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 데이터 로드 함수
  const loadMoreData = () => {
    if (loading || !hasMore) return;

    setLoading(true);

    setTimeout(() => {
      const newItems = fetchData(page);

      setData((prevData) => [...prevData, ...newItems]);
      setPage((prevPage) => prevPage + 1);
      setLoading(false);

      if (page >= 5) {
        // 5페이지까지만 데이터가 있다고 가정
        setHasMore(false);
      }
    }, 1000); // 1초 로딩 지연 시뮬레이션
  };

  // 초기 데이터 로드
  useEffect(() => {
    loadMoreData();
  }, []);

  // 로딩 인디케이터 렌더링 함수
  const renderFooter = () => {
    if (!loading) return null;
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4285EA" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <FeedCard item={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{
          padding: 16,
          flexGrow: 1,
        }}
      />
      {/* 초기 로딩 상태 (데이터가 없을 때 스켈레톤을 보여줄 자리) */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  loadingContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
});
