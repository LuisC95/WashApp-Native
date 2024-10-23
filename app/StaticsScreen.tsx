import { Text, View } from "react-native";
import Service from "../components/statics-components/Service"; 
import Schedule from "@/components/statics-components/Schedule-test";

export default function StaticsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <Schedule />
      <Text>Statics Screen</Text>
      <Service />
    </View>
  );
}