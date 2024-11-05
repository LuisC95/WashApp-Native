import { Text, View } from "react-native";
import Schedule from "@/components/statics-components/Schedule-test";
import { styles } from "./styles/static-screen-styles";
import React from "react";

export default function StaticsScreen() {
  return (
    <View
      style={[styles.screenContainer]}
    >
      <Schedule />
    </View>
  );
}