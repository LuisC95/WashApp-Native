import { Button, View } from "react-native";
import { useRouter } from "expo-router";

export default function StaticsButton() 
{
    const router = useRouter();
    return(
        <View>
            <Button title="Go to Statics" onPress={() => router.push("./StaticsScreen")} /> 
        </View>
    );

}