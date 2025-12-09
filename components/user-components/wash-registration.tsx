import React, { useState, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '@/app/styles/wash-registration-styles';
import { setCurrentWashNumber, serviceRegistration } from '../statics-components/Service';


export default function WashRegistration() 
{
    const router = useRouter();
    
    // Referencias para acceder a los inputs y cambiar el foco entre ellos
    const input2Ref = useRef<TextInput>(null);
    const input3Ref = useRef<TextInput>(null);
    
    // Estados para los tres espacios del número de lavado (máximo 3 dígitos)
    const [space1, setSpace1] = useState<string>('');
    const [space2, setSpace2] = useState<string>('');
    const [space3, setSpace3] = useState<string>('');

    /**
     * Maneja el cambio de texto en el primer espacio
     * Solo permite un dígito y automáticamente mueve el foco al segundo espacio si se completa
     */
    const handleSpace1Change = (text: string) => 
    {
        const sanitized = text.replace(/[^0-9]/g, '').slice(0, 1);
        setSpace1(sanitized);
        
        // Si se ingresa un dígito, mover el foco al siguiente input
        if (sanitized.length === 1) {
            input2Ref.current?.focus();
        }
    };

    /**
     * Maneja el cambio de texto en el segundo espacio
     * Solo permite un dígito y automáticamente mueve el foco al tercer espacio si se completa
     */
    const handleSpace2Change = (text: string) => 
    {
        const sanitized = text.replace(/[^0-9]/g, '').slice(0, 1);
        setSpace2(sanitized);
        
        // Si se ingresa un dígito, mover el foco al siguiente input
        if (sanitized.length === 1) {
            input3Ref.current?.focus();
        }
    };

    /**
     * Maneja el cambio de texto en el tercer espacio
     * Solo permite un dígito (último espacio)
     */
    const handleSpace3Change = (text: string) => 
    {
        const sanitized = text.replace(/[^0-9]/g, '').slice(0, 1);
        setSpace3(sanitized);
    };

    /**
     * Maneja el envío del formulario
     * Combina los tres espacios en un número, registra el lavado y navega al home
     */
    const handleSubmit = () => 
    {
        // Combinar los tres espacios en un único número
        const fullNumber = parseInt(space1 + space2 + space3, 10);
        
        if (!isNaN(fullNumber) && fullNumber > 0) {
            // Establecer el número de lavado actual
            setCurrentWashNumber(fullNumber);
            
            // Registrar el servicio
            serviceRegistration();
            
            // Navegar automáticamente al home
            router.push('/');
        }
    };

    return (
        <View style={styles.container}>
            {/* Contenedor centrado del input con los tres espacios */}
            <View style={styles.inputContainer}>
                {/* Primer espacio del número de lavado */}
                <TextInput
                    style={styles.inputSpace}
                    value={space1}
                    onChangeText={handleSpace1Change}
                    placeholder="0"
                    placeholderTextColor="#888"
                    keyboardType='numeric'
                    maxLength={1}
                />
                
                {/* Separador visual */}
                <Text style={styles.separator}>-</Text>
                
                {/* Segundo espacio del número de lavado */}
                <TextInput
                    ref={input2Ref}
                    style={styles.inputSpace}
                    value={space2}
                    onChangeText={handleSpace2Change}
                    placeholder="0"
                    placeholderTextColor="#888"
                    keyboardType='numeric'
                    maxLength={1}
                />
                
                {/* Separador visual */}
                <Text style={styles.separator}>-</Text>
                
                {/* Tercer espacio del número de lavado */}
                <TextInput
                    ref={input3Ref}
                    style={styles.inputSpace}
                    value={space3}
                    onChangeText={handleSpace3Change}
                    placeholder="0"
                    placeholderTextColor="#888"
                    keyboardType='numeric'
                    maxLength={1}
                />
            </View>

            {/* Botón de envío que navega al home */}
            <TouchableOpacity style={styles.registrationButton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
}

