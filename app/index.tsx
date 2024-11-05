import { Text, View } from "react-native";
import  StaticsButton  from "../components/statics-components/StaticsButton";
import MemberUserRouteButton from "../components/user-components/User-route-button";
import React from "react";


export default function Index() {
  return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StaticsButton /> 
        <Text> </Text>
        <MemberUserRouteButton />

      </View> 
  );
}