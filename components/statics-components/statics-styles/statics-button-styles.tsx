import StaticsButton from "../StaticsButton";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create(
    {
        staticsButton:
        {
            display: 'flex',
            backgroundColor: '#000E1F',
            height: '100%',
            width: '38.2%',
            alignSelf: 'flex-end',
            borderRadius: 50,
            position: 'absolute',
            bottom: 0,
            right: 0,
            margin: 2,
            boxShadow: 'inset inset 5px 5px 10px #000a15, inset -5px -5px 10px #001229',
            justifyContent: 'center',
            alignItems: 'center',
        },
        staticsButtonText:
        {
            width: '90%',  // Ajusta según el tamaño de tu logo
            height: '90%', // Ajusta según el tamaño de tu logo
            resizeMode: 'contain', // Asegura que la imagen no se deforme
        }
    }
);