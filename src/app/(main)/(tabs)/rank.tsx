import { Text, View } from "@/components/common/Themed";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RankScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={[{ paddingTop: insets.top }]}
    >
      <View style={styles.content}>
        <Text style={styles.title}>랭킹</Text>
        <Text style={styles.subtitle}>다른 수영인들과 경쟁하세요</Text>

        {/* 여기에 랭킹 목록을 추가할 수 있습니다 */}
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>🏆</Text>
          <Text style={styles.placeholderText}>랭킹 정보가 표시됩니다</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 24,
  },
  placeholder: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 48,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 300,
  },
  placeholderText: {
    fontSize: 16,
    color: "#9CA3AF",
    textAlign: "center",
    marginTop: 8,
  },
});
