import { useState } from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {DateTime} from 'luxon';

export default function Schedule()
{
    //state used to save current month and year
    const [currentDate, setCurrentDate] = useState(DateTime.local());

    //get current month and year 
    const month = currentDate.month;
    const year = currentDate.year;

    //get the first day of the month and the number of days in the month
    const startOfMonth = DateTime.local(year, month, 1);
    const daysInMonth = startOfMonth.daysInMonth ?? 0; 

    //change month function
    function changeMonth(direction: 'prev' | 'next')
    {
        if(direction === 'prev')
        {
            setCurrentDate(currentDate.minus({ months: 1}))
        }
        else
        {
            setCurrentDate(currentDate.plus({ months: 1}))
        }
        
    };

    //rendering days of the month
    function renderDays()
    {
        const days = [];
        for (let day = 1; day <= daysInMonth; day++)
            {
                days.push(
                    <View key={day} style={styles.day}>
                        <Text>{day}</Text>
                    </View>
                );
            }
            return days;
    };
    return (
        <View style={styles.container}>
      {/* Header shows month and year */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeMonth('prev')}>
          <Text style={styles.navButton}>◀</Text>
        </TouchableOpacity>
        <Text style={styles.monthText}>
          {currentDate.toFormat('MMMM yyyy')}
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
const styles = StyleSheet.create({
    container: {
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    monthText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    navButton: {
      fontSize: 20,
      padding: 10,
    },
    daysContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    day: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
    },
  });