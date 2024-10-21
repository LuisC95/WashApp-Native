import { Text, View } from "react-native";
import WashInfo from "../components/WashInfo"; 

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
      <WashInfo />
    </View>
  );
}