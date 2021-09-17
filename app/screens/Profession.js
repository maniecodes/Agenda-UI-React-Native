import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import ProfHeader from '../components/ProfHeader';
import RadioButtonContainer from '../components/RadioButtonContainer';



const ProfessionScreen = () => {
    const data = [
        {
            text: "Artes plásticas",
        },
        {
            text: "Derecho",
        },
        {
            text: "Desarrollo",
        },
        {
            text: "Diseño",
        },
        {
            text: "Salud",
        },
        {
            text: "Administración",
        },
        {
            text: "Diseño",
        },
        {
            text: "Marketing",
        },
    ];

    const onRadioButtonPress = (itemIdx) => {
        console.log("Clicked", itemIdx);
    };

    return (
        /*  Header Begin */
        <SafeAreaView style={styles.container}>
            <ProfHeader title="Área profesional" />
            <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
        </SafeAreaView>
        /*  Header End */
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    heading: {
        color: '#3385ff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});

export default ProfessionScreen;
