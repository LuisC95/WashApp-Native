import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: 
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%',
        gap: 15,
        flex: 1,
        height: '100%',
    },
    
    /**
     * Contenedor centrado para los tres espacios del input
     * Justifica el contenido y lo centra horizontalmente
     */
    inputContainer:
    {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flex: 1,
    },
    
    /**
     * Estilos para cada espacio individual del input
     * Cada espacio acepta un solo dígito
     */
    inputSpace: 
    {
        height: 50,
        width: 50,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000E1F',
    },
    
    /**
     * Separador visual entre los espacios del input
     */
    separator:
    {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000E1F',
    },
    
    registrationButton: 
    {
        backgroundColor: '#52CC52',
        boxShadow:  '8px 8px 25px #3b933b,-8px -8px 25px #69ff69',
        height: 50,
        width: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    buttonText: 
    {
        color: '#000E1F',
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'helvetica-neue',
    },
});