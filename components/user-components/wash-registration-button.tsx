import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { router, useRouter, useFocusEffect } from "expo-router";
import { styles } from './user-components-styles/wash-registration-button-style';
import { hasWashToday, getLastWash } from '../statics-components/Service';

/**
 * Botón que navega a la pantalla de registro de lavado
 * Se oculta automáticamente si ya hay un lavado registrado hoy
 *
 * @component
 */
export default function WashRegistrationButton() {
    const [washRegisteredToday, setWashRegisteredToday] = useState(false);

    /**
     * Actualiza el estado cuando la pantalla está en foco
     * Verifica si hay un lavado registrado para hoy
     */
    useFocusEffect(
        React.useCallback(() => {
            setWashRegisteredToday(hasWashToday());
        }, [])
    );

    // Si ya hay un lavado hoy, no mostrar el botón
    if (washRegisteredToday) {
        return null;
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push('./wash-regstration-screen')}>
            <Text style={styles.buttonText}>
                New Wash?
            </Text>
        </TouchableOpacity>
    );
}