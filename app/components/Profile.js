/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-elements';

const Profile = () => {
  return (
    <View style={{flexDirection: 'row', paddingLeft: 10, margin: 10}}>
      <View>
        <Avatar
          rounded
          //   size="medium"
          source={{
            uri: 'https://i2.wp.com/xclusiveloaded.com/wp-content/uploads/2021/01/Ayra-Starr-Away-Video-768x432-1.jpg',
          }}
        />
      </View>

      <View style={{paddingLeft: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#424049'}}>
          Antony Ruiz
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 12,
            color: '#7E8FB9',
          }}>
          @anothy
        </Text>
        <Text style={styles.title}>
          <Text style={styles.bold}>Categories: </Text>
          Young <Text style={{fontWeight: 'bold', fontSize: 28}}>.</Text>{' '}
          Meditacion hoistca
        </Text>
        <Text style={styles.title}>
          <Text style={styles.bold}>Fecha de asesoria: </Text>
          18/11/2021
        </Text>
        <Text style={styles.title}>
          <Text style={styles.bold}>Hora: </Text>4:00PM
        </Text>
        <Text style={styles.title}>
          <Text style={styles.bold}>Tiempo: </Text>45 minutos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#424049',
    paddingBottom: 3,
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Profile;
