import { Text, View } from "react-native";
import Service from "../components/statics-components/Service"; 
import Schedule from "@/components/statics-components/Schedule-test";
import { styles } from "./styles/static-screen-styles";
export default function StaticsScreen() {
  return (
    <View
      style={[styles.screenContainer]}
    >
      
      <Schedule />
      <Service />
    </View>
  );
}