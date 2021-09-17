import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AppButton = ({ onPress, title, style, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={styles.button({ ...style })}>
        <Text style={styles.text({ ...textStyle })}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: ({ ...inherit }) => ({
        elevation: 8,
        borderRadius: 10,
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
        marginTop: 5,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 10,
        borderWidth: 1,
        ...inherit
    }),
    text: ({ ...inherit }) => ({
        fontSize: 15,
        alignSelf: "center",
        textTransform: "uppercase",
        ...inherit
    })
});

export default AppButton;
