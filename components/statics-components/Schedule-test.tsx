import { useState, useRef  } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Button, ScrollView, PanResponder} from 'react-native';
import {DateTime} from 'luxon';
import {washServices} from './Service';
import {styles} from './statics-styles/schedule-styles';

export class Calendar
{
    dayDate: number;
    month: number; 
    year: number; 
    weekDay: number; 
    hour: number; 
    minute: number; 

    constructor
    (
        dayDate: number,
        month: number, 
        year: number, 
        weekDay: number, 
        hour: number, 
        minute: number, 
    )
    {
        this.dayDate = dayDate;
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
    var currentDate = new Calendar //object created as current date from state
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

    const panResponder = useRef
    (
        PanResponder.create(
            {
                onMoveShouldSetPanResponder: (_, gestureState) => Math.abs(gestureState.dx) > 20,
                onPanResponderRelease: (_, gestureState) => 
                    {
                    if (gestureState.dx > 20) {
                        changeMonth('prev'); // Deslizar hacia la derecha -> mes anterior
                    } else if (gestureState.dx < -20) {
                        changeMonth('next'); // Deslizar hacia la izquierda -> mes siguiente
                    }
                },
            })
    ).current;

        //change month function
        function changeMonth(direction: 'prev' | 'next') 
        {
            setCDate(prevDate => 
                direction === 'prev' ? prevDate.minus({ months: 1 }) : prevDate.plus({ months: 1 })
            );
        }
        
        let dateInfo: string = '';
        
        function dateWashInfo(day: number): string {
            const service = washServices.find(service => service.dayDate === day && service.month === month);
            if (service) {
                return (`You did a wash at: ${month}/${day}/${year}\nService Status: ${service.serviceStatus ? 'Done' : 'Pending'}\nService Number: ${service.serviceNumber}\nService Employee: ${service.serviceEmployee}\nService Hour: ${service.hour}:${service.minute}\nService Type: ${service.serviceType}\nService Timming: ${service.serviceTimming}\nService Rating: ${service.serviceRating}\nService Feedback: ${service.feedback}\nService Current Step: ${service.serviceCurrentStep}\nService Recomendations: ${service.recomendations}\n`);
            } else {
                return `You didn't wash at: ${month}/${day}/${year}`;
            }
        }


        
        function renderDays()
        {
            const days = [];
            let renderingDate = DateTime.local(year, month, 1);
            var keyDay = 0;
            var weekRow = 0;
           
            
            for (let day = 1; day <= daysInMonth; day++) 
                {
                    const updatedDate = renderingDate.set({day});
                    let weekDay = updatedDate.weekday;
                    const service = washServices.find(s => s.dayDate === day && s.month === month);

                    // Restart the style in each iteration
                    let usedStyle = styles.regularDay;
                    let usedStyleLetter = styles.washDayLetter;

                        // style adjustment verification
                    if (service) 
                        {
                            usedStyle = styles.washDay;
                            usedStyleLetter = styles.washDayLetter;
                        } 
                    else if (updatedDate.month !== month) 
                        {
                            usedStyle = styles.regularDay;
                        }
                    else 
                        {
                            usedStyle = styles.regularDay;
                            usedStyleLetter = styles.regularDayLetter;
                        }
                    
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
                            style={usedStyle}
                            onPress={() => 
                                {
                                    dateSelection(day);
                                    console.log(dateInfo);
                                }}
                        >
                            <Text
                                style={usedStyleLetter}
                            >{dayNumber}</Text>                            
                        </TouchableOpacity>
                    )
                }
                return days;
        };

        const [selectDate, setSelectDate] = useState<number | null>(null)  //state used to select days
        function dateSelection(day: number)
        {
            setSelectDate(day);
            currentDate.dayDate = day;
            setCDate(cDate.set({ day: currentDate.dayDate}));
            
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

        // Renderizamos la información del día seleccionado
        function renderInfo() {
            if (selectDate !== null) {
            const info = dateWashInfo(selectDate);
            return (
                <ScrollView /*style={styles.infoContainer}*/>
                <Text>{info}</Text>
                </ScrollView>
            );
            }
            return null;
        }



        return (
            <View style={styles.container}{...panResponder.panHandlers}>
              {/* Cabecera con el mes y cambio de mes */}
              <View style={styles.header}>
                <TouchableOpacity onPress={() => changeMonth('prev')}>
                  <Text style={styles.navButton}>◀</Text>
                </TouchableOpacity>
                <Text style={styles.monthText}>{cDate.toFormat('MMMM yyyy')}</Text>
                <TouchableOpacity onPress={() => changeMonth('next')}>
                  <Text style={styles.navButton}>▶</Text>
                </TouchableOpacity>
              </View>
              
              {/* Fila de nombres de días */}
              <View style={styles.weekDaysContainer}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <View key={index} style={styles.weekDayNames}>
                    <Text>{day}</Text>
                  </View>
                ))}
              </View>
        
              {/* Contenedor de días */}
              <View style={styles.daysContainer}>{renderDays()}</View>
        
              {/* Información del día seleccionado */}
              {renderInfo()}
            </View>
          );
}
