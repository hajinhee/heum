import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "./Themed";

type SegmentedControlProps = {
  options: string[];
  selectedIndex: number;
  alphaValue?: number;
  selectedBackgroundColor?: string;
  activeTextColor?: string;
  inactiveTextColor?: string;
  onSelect: (index: number) => void;
};

export default function SegmentedControl({
  options,
  selectedIndex,
  alphaValue = 1.0,
  selectedBackgroundColor = "#FFFFFF",
  activeTextColor = "#111827",
  inactiveTextColor = "#6B7280",
  onSelect,
}: SegmentedControlProps) {
  const translucentBg = `rgba(243, 243, 243, ${alphaValue})`;
  return (
    <View style={[styles.container, { backgroundColor: translucentBg }]}>
      {options.map((option, index) => {
        const isSelected = index === selectedIndex;

        return (
          <TouchableOpacity
            key={option}
            style={styles.optionContainer}
            onPress={() => onSelect(index)}
          >
            {isSelected && (
              <View
                style={[
                  styles.selectedBackground,
                  { backgroundColor: selectedBackgroundColor },
                ]}
              />
            )}
            <Text
              style={[
                styles.optionText,
                { color: inactiveTextColor },
                isSelected && { color: activeTextColor },
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // borderRadius: 12,
    borderRadius: 30,
    height: 44,
    padding: 3,
  },
  optionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // borderRadius: 9,
    borderRadius: 30,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "500",
    zIndex: 10,
  },
  selectedText: {},
});
