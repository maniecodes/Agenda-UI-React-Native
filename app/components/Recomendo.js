/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import ToggleSwitch from 'toggle-switch-react-native';

const Recomendo = ({data, index}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemBody}>
        <Card containerStyle={styles.card}>
          <View>
            <Text style={{fontSize: 14, color: '#7E8FB9'}}>{data.date}</Text>
            <Text style={styles.itemTitle}>{data.title}</Text>
            <Text
              style={{
                fontSize: 12,
                lineHeight: 20,
                paddingBottom: 10,
                color: '#424049',
              }}>
              {data.description}
            </Text>
            <Text style={{fontSize: 14, color: '#424049'}}>{data.body}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <ToggleSwitch
                isOn={data.check}
                onColor="#7F8FFF"
                offColor="#7F8FFF"
                size="small"
                onToggle={isOn => !data.check}
              />
              <Text style={styles.itemTitle}> Information exusive para</Text>
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Recomendo;
