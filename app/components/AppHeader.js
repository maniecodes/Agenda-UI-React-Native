import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const AppHeader = ({
  title,
  color
}) => {
  return (
    <Header
      containerStyle={{ backgroundColor: color, justifyContent: 'space-around' }}
      leftComponent={
        <View>
          <TouchableOpacity>
            <Icon name="chevron-left" color="#5B74FB" size={25} />
          </TouchableOpacity>
        </View>
      }
      rightComponent={
        <SafeAreaView>
          <TouchableOpacity>
            <Icon name="plus" color="#5B74FB" size={23} />
          </TouchableOpacity>
        </SafeAreaView>
      }
      centerComponent={{ text: title, style: styles.heading }}
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

export default AppHeader;
