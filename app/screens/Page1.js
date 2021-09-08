/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Page1Screen = props => {
  return (
    /*  Header Begin */
    <SafeAreaView>
      <Header
        containerStyle={{
          backgroundColor: '#fff',
          justifyContent: 'space-around',
        }}
        leftComponent={
          <View>
            <TouchableOpacity>
              <Icon
                name="chevron-left"
                type="material"
                color="blue"
                size={25}
              />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <SafeAreaView>
            <TouchableOpacity>
              <Icon name="add" type="material" color="blue" size={23} />
            </TouchableOpacity>
          </SafeAreaView>
        }
        centerComponent={{text: 'Historial assoria', style: styles.heading}}
      />
    </SafeAreaView>
    /*  Header End */
  );
};

const styles = StyleSheet.create({
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

export default Page1Screen;
