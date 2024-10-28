import { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {DateTime} from 'luxon';
import {Wash, currentWash} from './Service';
import {styles} from './statics-styles/schedule-styles';

export class Date
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
    var currentDate = new Date //object created as current date from state
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
                setCDate(cDate.minus({ month: 1}))
            }
            else
            {
                setCDate(cDate.plus({ month: 1}))
            }
            
        };

        function renderDays()
        {
            const days = [];
            let renderingDate = DateTime.local(year, month, 1);
            var keyDay = 0;
            var weekRow = 0;
            let weekDaysNames = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday'];
            
            for (let day = 1; day <= daysInMonth; day++) 
                {
                    const updatedDate = renderingDate.set({day});
                    let weekDay = updatedDate.weekday;
                    
                    keyDay++;
                    weekRow++;
                    var print = day;
                    let dayNumber: any;

                    if (weekRow != weekDay && weekRow <= weekDay ) 
                    {
                        print = 0;
                        day--;
                    }
                    else if (print == 0)
                    {
                        dayNumber = '';
                    }
                    else
                    {
                        dayNumber = day;
                    }

                    days.push
                    (
                        <TouchableOpacity
                            key={keyDay}
                            style={[styles.day]}
                            onPress={() => 
                                {
                                    dateSelection(day);
                                    console.log(currentWash.serviceEmployee);
                                }}
                        >
                            <Text>{dayNumber}</Text>                            
                        </TouchableOpacity>
                    )
                }
                return days;
        };

        const [selectDate, setSelectDate] = useState<number | null>(null)  //state used to select days
        function dateSelection(day: number)
        {
            setSelectDate(day);
            currentDate.day = day;
            setCDate(cDate.set({ day: currentDate.day}));
            
            
            
        }

        let weekDaysName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        function weekDaysNameBar()
        {
            return weekDaysName.map((weekDayName, index) =>
            (
                <View key={index} style={styles.weekDayNames}>
                    <Text>{weekDayName}</Text>
                </View>
            ));
        }

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
                  {/* Fila que muestra los días de la semana */}
            <View style={styles.weekDaysContainer}>
                {weekDaysNameBar()}
            </View>
            {/* days container */}
            <View style={styles.daysContainer}>{renderDays()}</View>
            {/* <Button title='WeekDay' onPress={(d) => console.log(d)}></Button> */}
        </View>
        );
}
