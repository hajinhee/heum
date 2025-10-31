import { Text, View } from "@/components/common/Themed";
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function MyScreen() {
  const insets = useSafeAreaInsets();

  // 프로필 사진
  const localProfileImage = require("@/assets/images/profile.png");
  const userProfileImageSource = localProfileImage;
  const hasProfileImage = !!userProfileImageSource;

  // 스마트 워치 연결 상태
  const isConnected = true;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[{ paddingTop: insets.top }]}
    >
      <View style={styles.content}>
        {/* 프로필 섹션 */}
        <View>
          <View style={styles.profileSection}>
            <Avatar size="lg">
              <AvatarFallbackText>청학동 수달</AvatarFallbackText>
              <AvatarImage source={require("@/assets/images/profile.png")} />
            </Avatar>
            <View>
              <Text style={styles.nickname}>청학동 수달님</Text>
              <Text style={styles.email}>user@example.com</Text>
            </View>
          </View>
          <View>
            <Text style={styles.bio}>자기소개 글이 없습니다.</Text>
          </View>
        </View>

        {/* 피드 섹션 */}
        <View style={styles.feedSection}>
          <View>
            <Text style={styles.counts}>59</Text>
            <Text style={styles.texts}>포스트</Text>
          </View>
          <View>
            <Text style={styles.counts}>112</Text>
            <Text style={styles.texts}>팔로워</Text>
          </View>
          <View>
            <Text style={styles.counts}>211</Text>
            <Text style={styles.texts}>팔로잉</Text>
          </View>
        </View>

        {/* 메뉴 섹션 */}
        <View style={styles.menuSection}>
          {/* 스마트 워치 */}
          <View style={styles.menuGroup}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="watch" size={18} color="black" />
                <Text style={styles.menuText}>스마트 워치</Text>
              </View>
              <View style={styles.endGroupWrapper}>
                <View style={styles.statusWrapper}>
                  <View
                    style={[
                      styles.statusDot,
                      isConnected
                        ? styles.connectedDot
                        : styles.disconnectedDot,
                    ]}
                  />
                  <Text style={styles.statusText}>
                    {isConnected ? "연결됨" : "연결 안됨"}
                  </Text>
                </View>

                {/* 화살표 */}
                <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
              </View>
            </TouchableOpacity>
          </View>
          {/* 계정 관리-내 정보, 알림 설정 */}
          <Text style={styles.menuItemsTitle}>계정 관리</Text>
          <View style={styles.menuGroup}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="person" size={18} color="black" />
                <Text style={styles.menuText}>내 정보</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="notifications" size={18} color="black" />
                <Text style={styles.menuText}>알림 설정</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
          </View>
          <View style={styles.menuGroup}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="log-out-outline" size={18} color="black" />
                <Text style={[styles.menuText]}>로그아웃</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
          </View>

          {/* 활동 관리-내 목표, 내 배지 */}
          <Text style={styles.menuItemsTitle}>활동 관리</Text>
          <View style={styles.menuGroup}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <FontAwesome name="bullseye" size={18} color="black" />
                <Text style={styles.menuText}>내 목표</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="ribbon" size={18} color="black" />
                <Text style={styles.menuText}>내 배지</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
          </View>
          {/* 고객 지원 - 자주 묻는 질물, 문의하기 */}
          <Text style={styles.menuItemsTitle}>고객 지원</Text>
          <View style={styles.menuGroup}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="help-circle" size={18} color="black" />
                <Text style={styles.menuText}>자주 묻는 질문</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <View style={styles.iconTextWrapper}>
                <Ionicons name="mail" size={18} color="black" />
                <Text style={styles.menuText}>문의하기</Text>
              </View>

              <Ionicons name="chevron-forward" size={18} color="#B0B0B0" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    padding: 16,
  },
  // 프로필 섹션
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    gap: 10,
    marginBottom: 16,
  },
  nickname: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },
  email: {
    fontSize: 14,
    color: "#6B7280",
  },
  bio: {
    fontSize: 14,
    color: "#B0B0B0",
    paddingHorizontal: 5,
  },
  // 피드 섹션
  feedSection: {
    display: "flex",
    flexDirection: "row",
    gap: 50,
    paddingHorizontal: 5,
    paddingVertical: 50,
  },
  counts: { fontWeight: "bold" },
  texts: { color: "#5B5B59" },
  // 메뉴 섹션
  menuSection: {
    backgroundColor: "white",
  },
  menuGroup: {
    display: "flex",
    gap: 10,
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
  },
  menuItemsTitle: {
    color: "#B0B0B0",
    fontSize: 12,
    marginTop: 15,
    marginBottom: 5,
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  iconTextWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
  },
  menuText: {
    color: "#111827",
  },
  // 스마트 워치 연결 상태
  endGroupWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
  },
  statusWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "transparent",
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  connectedDot: {
    backgroundColor: "#56D953",
  },
  disconnectedDot: { backgroundColor: "#EF4444" },
  statusText: {},
  // 로그아웃
  logoutButton: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  logoutText: {
    fontWeight: "600",
    color: "#EF4444",
  },
});
