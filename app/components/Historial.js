/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';

const Historial = ({data, index}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBody}>
        <Card containerStyle={styles.card}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={styles.title}>
                <Text style={styles.bold}>Fecha de asesoria: </Text>
                {data.fetcha}
              </Text>
              <Text style={styles.title}>
                <Text style={styles.bold}>Categories: </Text>
                Young <Text style={{fontWeight: 'bold', fontSize: 19}}>
                  .
                </Text>{' '}
                Meditacion hoistca
              </Text>
              <Text style={styles.title}>
                <Text style={styles.bold}>Fecha de asesoria: </Text>
                {data.fetcha}
              </Text>
              <Text style={styles.title}>
                <Text style={styles.bold}>Hora: </Text>
                {data.hora}
              </Text>
              <Text style={styles.title}>
                <Text style={styles.bold}>Tiempo: </Text>
                {data.tiempo}
              </Text>
            </View>
            <View>
              <View
                style={[styles.cardContainer, {backgroundColor: '#F8F8F9'}]}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: 5,
                    paddingTop: 2,
                  }}>
                  <Text style={{color: '#C2C4EE', paddingTop: 5}}>
                    sesoría finalizada
                  </Text>
                  <View
                    style={{
                      height: 20,
                      width: 20,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: '#C2C4EE',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View
                      style={{
                        height: 13,
                        width: 13,
                        borderRadius: 6,
                        backgroundColor: '#C2C4EE',
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //   },
  //   heading: {
  //     color: '#5B74FB',
  //     fontSize: 14,
  //     fontWeight: 'bold',
  //   },
  title: {
    fontSize: 12,
    color: '#424049',
    paddingBottom: 3,
  },
  bold: {
    fontWeight: 'bold',
  },
  //   button: {
  //     borderRadius: 10,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     width: '100%',
  //   },

  itemContainer: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  itemBody: {
    flexGrow: 1,
    justifyContent: 'center',
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

export default Historial;
