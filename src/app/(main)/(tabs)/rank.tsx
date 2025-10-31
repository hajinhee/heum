import SegmentedControl from "@/components/common/SegmentedControl";
import { Text, View } from "@/components/common/Themed";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const RANK_TIME_OPTIONS = ["Weekly", "All Time"];

export default function RankScreen() {
  const insets = useSafeAreaInsets();
  const [selectedIndex, setSelectedIndex] = useState(0); // 기본값: 'Weekly'

  return (
    <ScrollView style={styles.container}>
      <View style={styles.segmentedControlWrapper}>
        <SegmentedControl
          options={RANK_TIME_OPTIONS}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          alphaValue={0.3}
          activeTextColor={"#4285EA"}
          inactiveTextColor={"#FFFFFF"}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            {RANK_TIME_OPTIONS[selectedIndex]} 랭킹 데이터
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4285EA",
  },
  segmentedControlWrapper: {
    padding: 16,
    backgroundColor: "#4285EA",
  },
  content: {
    padding: 16,
    backgroundColor: "#4285EA",
  },
  placeholder: {
    borderRadius: 16,
    padding: 48,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 300,
    backgroundColor: "#4285EA",
  },
  placeholderText: {
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
    marginTop: 8,
  },
});
