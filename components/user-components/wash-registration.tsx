import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '@/app/styles/wash-registration-styles';
import { setCurrentWashNumber, serviceRegistration } from '../statics-components/Service';


export default function WashRegistration() 
{
    
        const [washNumber, setWashNumber] = useState<number | null>(null)

        const handleTextChange = (text: string) => 
        {
            const number = parseInt(text, 10);
            if (!isNaN(number)) {
                setWashNumber(number);
                setCurrentWashNumber(number);
            } else {
                setWashNumber(null);
                setCurrentWashNumber(null);
            }
        };
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={washNumber !== null ? washNumber.toString() : ''} // Valor del input
                    onChangeText={handleTextChange} // Función para actualizar el estado
                    placeholder="Enter wash details" // Texto que desaparece al enfocar
                    placeholderTextColor="#888" // Color del placeholder
                    keyboardType='numeric' // Tipo de teclado
                />
                <TouchableOpacity style={styles.registrationButton} onPress={() => { serviceRegistration() }}>
                    <Text style={styles.buttonText}>{'>'}</Text>
                </TouchableOpacity>
            </View>
        );
}

