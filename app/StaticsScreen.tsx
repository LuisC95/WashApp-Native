import { Text, View } from "react-native";
import Service from "../components/statics-components/Service"; 

export default function StaticsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Statics Screen</Text>
      <Service />
    </View>
  );
}