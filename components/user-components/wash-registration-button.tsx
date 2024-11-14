import React from 'react';
import { View, Text, Button } from 'react-native';
import { router, useRouter } from "expo-router";

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
        <View>
            <Button title='New Wash' onPress={() => router.push('./wash-regstration-screen')}>
            </Button>
        </View>
    );
}