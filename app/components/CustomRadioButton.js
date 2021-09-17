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
                <View style={[styles.radioButtonTextContainer]}>
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
        height: 40,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: "center",
        paddingLeft: 10,
        paddingRight: 10,
        // borderWidth: 0.5,
        // borderColor: "red",
        flexDirection: "row",
        alignItems: "center",
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
    radioButtonTextContainer: {
        flex: 5,
        height: 50,
        justifyContent: "center",
        paddingLeft: 10,
    },
    radioButtonText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#424049'
    },
    line: {
        borderColor: '#C2C4EE',
        borderTopWidth: 1,
        marginLeft: 20,
        marginRight: 20
    },
});

export default CustomRadioButton;