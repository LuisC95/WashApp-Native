import { Button, View } from "react-native";
import { router } from "expo-router";
import React from "react";

export default function StaticsButton() 
{
    return(
        <View>
            <Button title="Go to Statics" onPress={() => router.push("./StaticsScreen")} /> 
        </View>
    );

}