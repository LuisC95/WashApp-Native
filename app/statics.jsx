import { Button,Text, View } from "react-native";

export default function StaticsButton() 
{
    return(
        <View>
        <Button title="Statics" onPress={() => console.log("Statics")} /> 
        </View>
    );

}