import{ View, Text, Button } from "react-native";

class Wash
{
    serviceNumber: number;
    serviceType: string;
    serviceStatus: boolean;
    serviceTimming: number;
    serviceEmployee:string;
    recomendations: string; 
    serviceRating: number; 
    feedback: string;
    serviceCurrentStep: string;
    

    constructor
    (
        serviceNumber:number, 
        serviceType:string, 
        serviceTimming:number, 
        serviceEmployee:string, 
        recomendations:string, 
        serviceRating:number, 
        feedback:string,
        serviceStatus:boolean,
        serviceCurrentStep: string
    )
    {
        this.serviceNumber = serviceNumber;
        this.serviceType = serviceType; 
        this.serviceTimming = serviceTimming;
        this.serviceEmployee = serviceEmployee;
        this.recomendations = recomendations;
        this.serviceRating = serviceRating;
        this.feedback = feedback;
        this.serviceStatus = serviceStatus;
        this.serviceCurrentStep = serviceCurrentStep;
    }
}

const currentWash = new Wash
    (
        104, 
        'FS hw', 
        20, 
        'Andreina', 
        'Express hand wax', 
        5, 
        'abc', 
        false, 
        'enjoy'
    );

export default function WashInfo()
{
    return(
        <View>
            <Button title="give me my object" onPress={() => console.log(`This is the wash number ${currentWash.serviceNumber}`)}></Button>
        </View>
    )
}