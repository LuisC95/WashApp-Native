import { StyleSheet } from "react-native";


  
export const styles = StyleSheet.create({
  container: 
  {
    padding: 20,
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
  },
  day: 
  {
    width: 40,
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
});
