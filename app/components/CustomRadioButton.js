import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomRadioButton = ({ isChecked, text, onRadioButtonPress }) => {
    const _renderCheckedView = () => {
        return isChecked ? (
            <View style={[styles.radioButtonIconInnerIcon]} />
        ) : null;
    };
    return (
        <View>
            <TouchableOpacity style={styles.mainContainer} onPress={onRadioButtonPress}>
                <View>
                    <Text style={styles.radioButtonText}>{text}</Text>
                </View>
                <View style={[styles.radioButtonIcon]}>{_renderCheckedView()}</View>

            </TouchableOpacity>
            <View style={styles.line}></View>
        </View>

    );
}
const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 15,
        marginBottom: 15,
        justifyContent: "space-between",
        flexDirection: "row",
    },
    radioButtonIcon: {
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "#6560F0",
        height: 18,
        width: 18,
        borderRadius: 18 / 2,
        marginRight: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    radioButtonIconInnerIcon: {
        height: 13,
        width: 13,
        backgroundColor: "#6560F0",
        borderRadius: 13 / 2,
        borderWidth: 2,
        borderColor: "white",
    },
    radioButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#424049'
    },
    line: {
        borderColor: '#C2C4EE',
        borderTopWidth: 1,
    },
});

export default CustomRadioButton;