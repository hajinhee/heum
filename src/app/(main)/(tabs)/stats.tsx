import SegmentedControl from "@/components/common/SegmentedControl";
import { Text, View } from "@/components/common/Themed";
import { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

const STATS_TIME_OPTIONS = ["Week", "Month", "Year"];

export default function StatsScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0); // 기본값: 'Week'
  return (
    <ScrollView style={styles.container}>
      <View style={styles.segmentedControlWrapper}>
        <SegmentedControl
          options={STATS_TIME_OPTIONS}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>
            {STATS_TIME_OPTIONS[selectedIndex]} 통계 데이터
          </Text>
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
  segmentedControlWrapper: {
    // paddingHorizontal: 16,
    // paddingVertical: 10,
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  content: {
    padding: 16,
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
