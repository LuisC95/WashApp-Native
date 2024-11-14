import React from "react";
import  { Calendar } from "./Calendar";
import  Profile  from '../user-components/Profile'
import { defUser, User } from '../user-components/User'
import { DateTime } from "luxon";

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
        dayDate: number,
        month: number,
        year: number,
        weekDay: number,
        hour: number,
        minute: number,
        serviceNumber:number, 
        serviceType:string, 
        serviceTimming:number, 
        serviceEmployee:string, 
        recomendations:string, 
        serviceRating:number, 
        feedback:string,
        serviceStatus:boolean,
        serviceCurrentStep: string,
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

export const washServices: Wash[] = 
[
    new Wash(18, 11, 2024, 4, 12, 26, 123, 'Full Service Hot Wax and Shine', 20, 'Felipe', 'Interior Super Clean', 4, 'abc', true, 'Enjoy your clean car!' ),
    new Wash(10, 10, 2024, 5, 16, 45, 325, 'Full Service Hot Wax and Shine', 12, 'Michelle', 'Interior Super Clean', 5, 'abc', true, 'Enjoy your clean car!' ),
    new Wash(13, 11, 2024, 2, 10, 25, 249, 'Full Service Hot Wax and Shine', 18, 'Andreina', 'Showroom Shine', 5, 'abc', true, 'Enjoy your clean car!' ),
    new Wash(7, 10, 2024, 2, 10, 25, 487, 'Full Service Hot Wax and Shine', 15, 'Orlando', 'ultimate interior', 5, 'abc', true, 'Enjoy your clean car!' ),
    new Wash(25, 10, 2024, 2, 10, 25, 576, 'Full Service Hot Wax and Shine', 20, 'Marializ', 'Express hand wax', 5, 'abc', true, 'Enjoy your clean car!' ),
];

const currentTime = DateTime.local();

export function washRegistration()
{
    washServices.push
    (
        new Wash
        (
            currentTime.day, 
            currentTime.month, 
            currentTime.year, 
            currentTime.weekday, 
            currentTime.hour, 
            currentTime.minute, 
            576, 
            defUser.service, 
            20, 
            'Marializ', 
            'Express hand wax', 
            5, 
            'abc', 
            true, 
            'Enjoy your clean car!' 
        )
    );
}