import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppHeader from '../components/AppHeader';
import AppButton from '../components/Button';

const AgendaScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            {/* Header Begin */}
            <AppHeader title='Agendar asesoría' color='#fff' />
            {/* Header End */}

            {/* Container */}
            <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                <View style={styles.containerItem}>
                    <View>
                        <Text style={styles.title}>Fecha y hora de la asesoría:</Text>
                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", }}>
                        <View style={styles.centerContainer}>
                            <Text style={styles.dateText}>15 April 2022</Text>
                        </View>
                        <View style={styles.centerContainer}>
                            <View style={styles.centerContainer}>
                                <Text style={[styles.dateText, { paddingRight: 5 }]}>9:00 am - 10:00pm</Text>
                            </View>
                            <View style={{ alignSelf: 'center' }}>
                                <Icon name="chevron-up" color="#5B74FB" size={15} />
                                <Icon name="chevron-down" color="#5B74FB" size={15} />
                            </View>
                        </View>

                    </View>
                </View>
                <Text style={{ fontSize: 12, color: '#7E8FB9', paddingTop: 10 }}>Selecciona una fecha para agendar tu asesoría</Text>
            </View>

            {/* Button */}
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
            }}>
                <AppButton onPress={() => { }} title="AGENDAR ASESORÍA" style={{
                    marginTop: 15,
                    backgroundColor: "#4E31EB",
                    borderColor: '#4E31EB',
                }} textStyle={{ color: '#fff' }} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    containerItem: {
        borderWidth: 1, 
        borderColor: '#5B74FB',
        borderRadius: 10, 
        paddingLeft: 20, 
        paddingRight: 15, 
        paddingBottom: 5, 
        paddingTop: 10
    },
    heading: {
        color: '#3385ff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#7E8FB9',
    },
    dateText: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#424049'
    },
    centerContainer: {
        flexDirection: "row",
        alignSelf: "center"
    }
});

export default AgendaScreen;
