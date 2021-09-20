import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    StyleSheet,
    Text,
    Dimensions,
    FlatList,
    Button
} from 'react-native';
// import { Button } from 'react-native-elements';
import AppHeader from '../components/AppHeader';
import DocProfile from '../components/DocProfile';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AppButton from '../components/Button';



const DocumentScreen = props => {


    // Main View of the application
    return (
        <SafeAreaView style={styles.container}>
            {/* App Header Begin*/}
            <AppHeader title='Documento' color='#F9F7FE' />
            {/* App Header End*/}

            {/* Top profile being */}
            <DocProfile />
            {/* Top profile end */}

            <View style={styles.line}></View>

            {/* List of Items  */}
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#F9F7FE' }}>
                    <View style={styles.listTab}>
                        <View>
                            <Text style={styles.title}>Descripción del documento</Text>
                        </View>
                        <View>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi malesuada fringilla metus at tincidunt. Proin nec massa nec arcu efficitur fermentum.</Text>
                            <Text style={{ marginTop: 20, lineHeight: 18, marginBottom: 30 }}>Fusce imperdiet feugiat felis, in ullamcorper quam accumsan ac. Maecenas quis neque sed velit hendrerit facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a consequat dui, non consectetur justo.</Text>
                        </View>
                    </View>

                </View>
                {/* End List of Items  */}

                {/* Button */}
                <AppButton onPress={() => { }} title="VISUALIZAR" style={{
                    backgroundColor: "#4E31EB",
                    borderColor: '#4E31EB',
                }} textStyle={{ color: '#fff' }} />
                <AppButton onPress={() => { }} title="DESCARGAR" style={{
                    backgroundColor: "#F9F7FE",
                    borderColor: '#4E31EB',
                }} textStyle={{ color: '#4E31EB' }} />

            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7FE',
    },

    heading: {
        color: '#5B74FB',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#424049',
        paddingBottom: 5,
        marginTop: 10
    },
    bold: {
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    line: {
        borderColor: '#4E31EB',
        borderTopWidth: 1.5,
    },
    listTab: {
        padding: 10,
    },
    btnTab: {
        width: Dimensions.get('window').width / 4,
        borderWidth: 0,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnTabActive: {
        borderWidth: 1,
        backgroundColor: '#4E31EB',
        borderColor: '#4E31EB',
    },
    textTab: {
        alignSelf: 'center',
        fontSize: 8,
        color: '#5B74FB',
    },
    iconTab: {
        width: 20,
        height: 20,
    },

    iconTabActive: {
        color: 'white',
    },
    textTabActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexGrow: 1,
        flexDirection: 'row',
    },
    itemBody: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingTop: 3,
        paddingBottom: 3,
        color: '#7E8FB9',
    },
    card: {
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        borderColor: '#fff',
        borderRadius: 10,
    },
    item3Container: {
        flexDirection: 'row',
        borderRadius: 5,
        margin: -10,
        marginBottom: 0,
    },
    documentCard: {
        // padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        borderColor: '#fff',
        borderRadius: 10,
    },
    gridView: {
        flex: 1,
    },
    cardContainer: {
        height: 60,
        width: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        borderColor: '#fff',
        borderRadius: 10,
        paddingTop: 5,
        paddingLeft: 10,
    },
});

export default DocumentScreen;
