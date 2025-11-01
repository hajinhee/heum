import { StyleSheet, Text, View } from "react-native";

export default function NotificationSettings() {
  return (
    <View style={styles.container}>
      <Text>알림 설정 페이지 내용</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
});
