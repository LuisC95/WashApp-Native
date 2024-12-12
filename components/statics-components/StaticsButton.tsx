import { TouchableOpacity, Image  } from "react-native";
import { router } from "expo-router";
import React from "react";
import { styles } from "./statics-styles/statics-button-styles";

export default function StaticsButton() 
{
    return(
        <TouchableOpacity style={styles.staticsButton} onPress={() => router.push("./StaticsScreen")}>
            <Image source={require('../../assets/images/shedule.png')} style={styles.staticsButtonText}/>
        </TouchableOpacity>
    );

}