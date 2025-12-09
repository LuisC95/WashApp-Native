import React, { useState } from "react";
import  { Calendar } from "./Calendar";
import  Profile  from '../user-components/Profile'
import { defUser, User } from '../user-components/User'
import washNumber  from '../user-components/wash-registration';
import { DateTime } from "luxon";
import { router } from "expo-router";

/**
 * Enumeración de estados disponibles para los servicios de detailing
 * Define el ciclo de vida completo de un servicio de lavado
 */
export enum ServiceStatusEnum {
    TUNNEL_WASH = 'tunnel_wash',              // Automatic tunnel wash
    QUEUED = 'queued',                        // Queued waiting for interior service
    IN_PROGRESS = 'in_progress',              // Interior/detailing service in progress
    COMPLETED = 'completed'                   // Service completed
}

/**
 * Clase que gestiona el historial y estado actual de un servicio
 * Permite rastrear todos los cambios de estado con timestamp y notas
 */
export class ServiceStatus 
{
    serviceId: number;           // Unique service ID
    currentStatus: ServiceStatusEnum;     // Current service status
    statusHistory: {             // Complete history of status changes
        status: ServiceStatusEnum;
        timestamp: DateTime;
        notes?: string;
    }[];

    /**
     * ServiceStatus constructor
     * @param serviceId - Unique service ID
     * @param initialStatus - Initial status (default TUNNEL_WASH)
     */
    constructor(serviceId: number, initialStatus: ServiceStatusEnum = ServiceStatusEnum.TUNNEL_WASH) {
        this.serviceId = serviceId;
        this.currentStatus = initialStatus;
        this.statusHistory = [
            {
                status: initialStatus,
                timestamp: DateTime.local(),
                notes: `Service #${serviceId} created`
            }
        ];
    }

    /**
     * Updates service status and records change in history
     * @param newStatus - New service status
     * @param notes - Optional notes about the change
     */
    updateStatus(newStatus: ServiceStatusEnum, notes?: string): void {
        this.currentStatus = newStatus;
        this.statusHistory.push({
            status: newStatus,
            timestamp: DateTime.local(),
            notes
        });
    }

    /**
     * Gets the readable name of the current status
     * @returns Status name in readable format
     */
    getStatusLabel(): string {
        const statusLabels: Record<ServiceStatusEnum, string> = {
            [ServiceStatusEnum.TUNNEL_WASH]: 'Tunnel Wash',
            [ServiceStatusEnum.QUEUED]: 'Queued',
            [ServiceStatusEnum.IN_PROGRESS]: 'In Progress',
            [ServiceStatusEnum.COMPLETED]: 'Completed'
        };
        return statusLabels[this.currentStatus];
    }

    /**
     * Gets the complete history of status changes
     */
    getStatusHistory() {
        return this.statusHistory;
    }
}

export class Wash extends Calendar
{
    serviceNumber: number;
    serviceType: string;
    serviceStatus: ServiceStatus;    // Cambio de boolean a ServiceStatus
    serviceTimming: number;
    serviceEmployee: string;
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
        serviceNumber: number, 
        serviceType: string, 
        serviceTimming: number, 
        serviceEmployee: string, 
        recomendations: string, 
        serviceRating: number, 
        feedback: string,
        initialStatus: ServiceStatusEnum,    // Cambio de boolean a ServiceStatusEnum
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
        this.serviceStatus = new ServiceStatus(serviceNumber, initialStatus);
        this.serviceCurrentStep = serviceCurrentStep;
    }
}

export const washServices: Wash[] = 
[
    new Wash(18, 11, 2024, 4, 12, 26, 123, 'Full Service Hot Wax and Shine', 20, 'Felipe', 'Interior Super Clean', 4, 'abc', ServiceStatusEnum.COMPLETED, 'Enjoy your clean car!' ),
    new Wash(10, 10, 2024, 5, 16, 45, 325, 'Full Service Hot Wax and Shine', 12, 'Michelle', 'Interior Super Clean', 5, 'abc', ServiceStatusEnum.COMPLETED, 'Enjoy your clean car!' ),
    new Wash(13, 11, 2024, 2, 10, 25, 249, 'Full Service Hot Wax and Shine', 18, 'Andreina', 'Showroom Shine', 5, 'abc', ServiceStatusEnum.IN_PROGRESS, 'Enjoy your clean car!' ),
    new Wash(7, 10, 2024, 2, 10, 25, 487, 'Full Service Hot Wax and Shine', 15, 'Orlando', 'ultimate interior', 5, 'abc', ServiceStatusEnum.QUEUED, 'Enjoy your clean car!' ),
    new Wash(25, 10, 2024, 2, 10, 25, 576, 'Full Service Hot Wax and Shine', 20, 'Marializ', 'Express hand wax', 5, 'abc', ServiceStatusEnum.TUNNEL_WASH, 'Enjoy your clean car!' ),
];

const currentTime = DateTime.local();

export function serviceRegistration()
{
    if (currentWashNumber !== null) {
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
                currentWashNumber, 
                defUser.service, 
                20, 
                'Andreina', 
                'Express hand wax', 
                5, 
                'abc', 
                ServiceStatusEnum.COMPLETED,    // New service starts at TUNNEL_WASH
                'Enjoy your clean car!' 
            )
        );
        // router.push('../../app/StaticsScreen');

    } else {
        console.error("currentWashNumber is null");
    }
}

export let currentWashNumber: number | null = null;

export const setCurrentWashNumber = (value: number | null) => {
  currentWashNumber = value;
};

/**
 * Checks if there is a registered service for today
 * @returns true if there is at least one service registered on today
 */
export const hasWashToday = (): boolean => {
    const today = DateTime.local();
    return washServices.some(wash => 
        wash.dayDate === today.day && 
        wash.month === today.month && 
        wash.year === today.year
    );
};

/**
 * Gets the last registered service if it exists
 * @returns The most recent service or null if there is none
 */
export const getLastWash = (): Wash | null => {
    return washServices.length > 0 ? washServices[washServices.length - 1] : null;
};
