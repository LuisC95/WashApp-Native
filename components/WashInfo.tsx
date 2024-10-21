import{ View, Text, Button } from "react-native";
import { getReactNavigationConfig } from "expo-router/build/getReactNavigationConfig";

class Wash
{
    serviceNumber: number;
    serviceType: string;
    timming: number;
    employee:string;
    recomendations: string; 
    serviceRating: number; 
    feedback: string;

    constructor(serviceNumber:number, serviceType:string, timming:number, employee:string, recomendations:string, serviceRating:number, feedback:string )
    {
        this.serviceNumber = serviceNumber;
        this.serviceType = serviceType; 
        this.timming = timming;
        this.employee = employee;
        this.recomendations = recomendations;
        this.serviceRating = serviceRating;
        this.feedback = feedback;
    }
}

const currentWash = new Wash(1, 'FS hw', 20, 'Andreina', 'Express hand wax', 5, 'abc');

export default function WashInfo()
{
    return(
        <View>
            <Button title="give me my object" onPress={() => console.log(currentWash)}></Button>
        </View>
    )
}