import { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {DateTime} from 'luxon';
import {Wash} from './Service';
import {styles} from './statics-styles/schedule-styles'

class Date
{
    day: number;
    month: number; 
    year: number; 
    weekDay: number; 
    hour: number; 
    minute: number; 

    constructor
    (
        day: number,
        month: number, 
        year: number, 
        weekDay: number, 
        hour: number, 
        minute: number, 
    )
    {
        this.day = day;
        this.month = month;
        this.year = year; 
        this.weekDay = weekDay;
        this.hour = hour;
        this.minute = minute;
    }
}

export default function Schedule()
{
    const [cDate, setCDate] = useState(DateTime.local()); //state used to save current month and year
    const currentDate = new Date //object created as current date from state
    (
        cDate.day,
        cDate.month,
        cDate.year,
        cDate.weekday,
        cDate.hour,
        cDate.minute
    );

    const year = currentDate.year;
    const month = currentDate.month;
    const startOfMonth = DateTime.local(year, month, 1); //get the first day of the month and the number of days in the month
    const daysInMonth = startOfMonth.daysInMonth ?? 0; //daysInMonth is a propierty from luxon, it get the number of days from any month

        //change month function
        function changeMonth(direction: 'prev' | 'next')
        {
            if(direction === 'prev')
            {
                setCDate(cDate.minus({ months: 1}))
            }
            else
            {
                setCDate(cDate.plus({ months: 1}))
            }
            
        };

        function renderDays()
        {
            const days = [];
            for (let day = 0; day <= daysInMonth; day++) 
                {
                    days.push
                    (
                        <TouchableOpacity
                            key={day}
                            style={[styles.day]}
                        >
                            <Text>{day}</Text>                            
                        </TouchableOpacity>
                    )
                }
                return days;
        };

    return(
        <View style={styles.container}>
            {/* Header shows month and year */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => changeMonth('prev')}>
                    <Text style={styles.navButton}>◀</Text>
                </TouchableOpacity>
                <Text style={styles.monthText}>
                    {cDate.toFormat('MMMM yyyy')}
                </Text>
                <TouchableOpacity onPress={() => changeMonth('next')}>
                    <Text style={styles.navButton}>▶</Text>
                </TouchableOpacity> 
            </View>
            {/* days container */}
            <View style={styles.daysContainer}>{renderDays()}</View>
        </View>
        );
}
