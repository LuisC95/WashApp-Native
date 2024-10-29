import { StyleSheet } from "react-native";

  
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
  regularDay: 
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
  washDay: 
  {
    width: 35,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#002e62',
    color: '#fff',
  },
  washDayLetter:
  {
    color: 'white',
  },
  regularDayLetter:
  {
    color: '#ccc',
  },
  selectDay: 
  {
      backgroundColor: 'blue', // El día seleccionado cambia a azul
  },
  weekDayNames:{
    width: 35,
    alignItems: 'center',
  },
  weekDaysContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
});
