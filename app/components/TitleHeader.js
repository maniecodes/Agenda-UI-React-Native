import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TitleHeader = () => {
    return (
        <Header
            containerStyle={{ backgroundColor: '#F9F7FE', justifyContent: 'space-around' }}
            leftComponent={
                <View>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#4E31EB', }}>Top Live</Text>
                    </TouchableOpacity>
                </View>
            }
            rightComponent={
                <SafeAreaView>
                    <View style={{ flexDirection: "row", }}>
                        <TouchableOpacity>
                            <Icon name="plus" color="#5B74FB" size={23} style={{ paddingRight: 10 }} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="bell-outline" color="#5B74FB" size={23} />
                        </TouchableOpacity>
                    </View>

                </SafeAreaView>
            }
        />
    );
};

const styles = StyleSheet.create({
    heading: {
        color: '#5B74FB',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default TitleHeader;
