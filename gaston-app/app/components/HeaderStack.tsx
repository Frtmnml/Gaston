import React from 'react';
import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../theme/theme";

export function HeaderStack() {
    return (
        <View style={styles.headerContainer}>
            <Image
                style={styles.logo}
                source={require('@/assets/images/logo.png')}
            />
            <Image
                style={styles.avatar}
                source={require('@/assets/images/avatar.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Align items to the edges
        alignItems: 'center', // Vertically center items
        backgroundColor: COLORS.primary, // Use the primary color as the background
        width: '100%', // Extend the container to 100% width
        height: 100, // Set a fixed height for the header
        paddingHorizontal: 16, // Add padding for spacing
    },
    logo: {
        width: 40,
        height: 40,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20, // Make the image circular
    },
});
