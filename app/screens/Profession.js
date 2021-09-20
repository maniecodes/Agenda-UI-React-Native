import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
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
        <SafeAreaView style={styles.container}>
            {/* Header Begin */}
            <ProfHeader title="Área profesional" />
            {/* Header End */}
            <View style={{ padding: 15 }}>
                <Text style={{ fontSize: 12, color: '#7E8FB9' }}>Selecciona un área profesional</Text>
                <RadioButtonContainer values={data} onPress={onRadioButtonPress} />
            </View>
        </SafeAreaView>
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
