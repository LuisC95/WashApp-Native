import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { User, defUser } from './User';
import { FontAwesome } from '@expo/vector-icons'; // Asegúrate de instalar @expo/vector-icons

export default function Profile() {
    const [user, setUser] = useState<User>(defUser);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    function handleChange(field: keyof User, value: string)
    {
        setUser((prevUser) => 
        ({
            ...prevUser,
            [field]: value,
        }));
    };

    const editableFields: { label: string, field: keyof User }[] = [
        { label: 'First Name', field: 'firstName' },
        { label: 'Last Name', field: 'lastName' },
        { label: 'Phone Number', field: 'phoneNumber' },
        { label: 'Email', field: 'email' },
        { label: 'Car Brand', field: 'carBrand' },
        { label: 'Car Model', field: 'carModel' },
        { label: 'Car Year', field: 'carYear' },
    ];

    return (
        <View>
            <Text style={{ fontSize: 24, marginBottom: 20 }}>Profile</Text>
                {/* Botón de editar en la parte superior */}
                <TouchableOpacity onPress={handleEditToggle} style={{ alignSelf: 'flex-end', margin: 10 }}>
                <FontAwesome name="pencil" size={24} color={isEditing ? "red" : "blue"} />
            </TouchableOpacity>
            {editableFields.map((item, index) => (
                <View key={index} style={{ marginBottom: 10 }}>
                    {isEditing ? (
                        <TextInput
                            style={{ borderBottomWidth: 1, padding: 5 }}
                            value={user[item.field]?.toString()}
                            onChangeText={(text) => handleChange(item.field, text)}
                        />
                    ) : (
                        <Text>{`${item.label}: ${user[item.field]}`}</Text>
                    )}
                </View>
            ))}
            {/* Renderizar los campos no editables */}
            <Text>Membership Code: {user.code}</Text>
            <Text>Membership Price: {user.price}</Text>
            <Text>Interior Confirmation: {user.interiorConfirmation}</Text>
            <Text>Membership Service: {user.service}</Text>
        </View>
    );
}
