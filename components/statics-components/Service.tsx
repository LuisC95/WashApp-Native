import{ View, Text, Button } from "react-native";
import  { Calendar } from "./Schedule-test";

export class Wash extends Calendar
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
        serviceCurrentStep: string,
        dayDate: number,
        month: number,
        year: number,
        weekDay: number,
        hour: number,
        minute: number,

    )
    {
        super(dayDate, month, year, weekDay, hour, minute);
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

export const currentWash = new Wash
    (
        104, 
        'Full Service Hot Wax and Shine', 
        20, 
        'Andreina', 
        'Express hand wax', 
        5, 
        'abc', 
        true, 
        'Enjoy your clean car!',
        21,
        10,
        2024,
        2,
        10,
        25,
    );

export const washServices: Wash[] = 
[
    new Wash(123, 'Full Service Hot Wax and Shine', 20, 'Felipe', 'Interior Super Clean', 4, 'abc', true, 'Enjoy your clean car!', 18, 10, 2024, 4, 12, 26),
    new Wash(325, 'Full Service Hot Wax and Shine', 12, 'Michelle', 'Interior Super Clean', 5, 'abc', true, 'Enjoy your clean car!', 10, 10, 2024, 5, 16, 45),
    new Wash(249, 'Full Service Hot Wax and Shine', 18, 'Andreina', 'Showroom Shine', 5, 'abc', true, 'Enjoy your clean car!', 13, 10, 2024, 2, 10, 25),
    new Wash(487, 'Full Service Hot Wax and Shine', 15, 'Orlando', 'ultimate interior', 5, 'abc', true, 'Enjoy your clean car!', 7, 10, 2024, 2, 10, 25),
    new Wash(576, 'Full Service Hot Wax and Shine', 20, 'Marializ', 'Express hand wax', 5, 'abc', true, 'Enjoy your clean car!', 25, 10, 2024, 2, 10, 25),
];

export default function ServiceInfo()
{
    return(
        <View>
            <Button title="give me my object" onPress={() => console.log(`This service was made it for ${currentWash.serviceEmployee}`)}></Button>
        </View>
    )
}