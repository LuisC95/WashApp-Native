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
export default function MemberUserRouteButton() {
    return (
        <View>
            <Button title='Edit Profile' onPress={() => router.push('./member-user-screen')}>
            </Button>
        </View>
    );
}