import React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { router, useRouter } from "expo-router";
import { styles } from './user-components-styles/wash-registration-button-style';

/**
 * A button component that navigates to the member user screen when pressed.
 *
 * @component
 * @example
 * return (
 *   <MemberUserRouteButton />
 * )
 */
export default function WashRegistrationButton() {
    return (
        <TouchableOpacity style={styles.container} onPress={() => router.push('./wash-regstration-screen')}>
            <Text style={styles.buttonText}>
                New Wash?
            </Text>
        </TouchableOpacity>
    );
}