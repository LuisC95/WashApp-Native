import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: 
    {
        // padding: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',

    },
    input: 
    {
        // position: 'absolute',
        height: "100%",
        width: '80%',
        borderColor: 'gray',
        borderBottomWidth: 1,
        // paddingHorizontal: 10,
        borderRadius: 5,
        textAlign: 'center',
    },
    registrationButton: 
    {
        backgroundColor: '#52CC52',
        boxShadow:  '8px 8px 25px #3b933b,-8px -8px 25px #69ff69',
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    buttonText: 
    {
        color: '#000E1F',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'helvetica-neue',
    },
});