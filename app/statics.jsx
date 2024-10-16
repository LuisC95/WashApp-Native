import { Button, Text, View } from "react-native";

export default function Statics() 
{
    return(
        <View>
            <Button title="Statics" onPress={() => console.log()} /> 
        </View>
    );
}