import { StyleSheet } from "react-native";
import { red } from "react-native-reanimated/lib/typescript/Colors";


  
export const styles = StyleSheet.create({

  container: 
  {
    padding: 20,
    // backgroundColor: 'blue',
  },
  header: 
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthText: 
  
  {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navButton: 
  {
    fontSize: 20,
    padding: 10,
  },
  daysContainer: 
  {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'red',
  },
  day: 
  {
    width: 35,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectDay: 
  {
      backgroundColor: 'blue', // El día seleccionado cambia a azul
  },
  weekDayNames:{
    width: 40,
    alignItems: 'center',
    backgroundColor: 'red',
  },
  weekDaysContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
});
