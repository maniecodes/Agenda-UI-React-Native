
import React, { useCallback, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import Slider from 'rn-range-slider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-elements';
import TitleHeader from '../components/TitleHeader';
import Thumb from '../components/slider/Thumb';
import Rail from '../components/slider/Rail';
import RailSelected from '../components/slider/RailSelected';
import Notch from '../components/slider/Notch';
import Label from '../components/slider/Label';
import { ScrollView } from 'react-native-gesture-handler';
import AppButton from '../components/Button';


const BusquedaScreen = () => {
  const [text, setText] = useState('');
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0.000);
  const [high, setHigh] = useState(1000.000);
  const [min, setMin] = useState(0.000);
  const [max, setMax] = useState(1000.000);
  const [floatingLabel, setFloatingLabel] = useState(true);


  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleValueChange = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);

  // Main View of the application
  return (
    <SafeAreaView style={styles.container}>
      {/* Title Header Begin*/}
      <TitleHeader />
      {/* Title Header End*/}
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text>Múltiples asesorías en vivo al alcance y dentro de tú presupuesto</Text>
        </View>

        {/* Search component begin*/}
        <Card containerStyle={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <Icon name="magnify" color="#5B74FB" size={23} style={{ paddingRight: 10 }} />
            <Text style={{ fontSize: 14, color: '#7E8FB9' }}>Busca un profesional, área o servicio</Text>
          </View>
        </Card>
        {/* Search component end*/}

        <View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ paddingLeft: 17, fontSize: 10, color: '#7E8FB9' }}>O busca un servicio más especifico:</Text>
          </View>

          <Card containerStyle={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, color: '#7E8FB9' }}>Área profesional</Text>
              <Icon name="chevron-right" color="#5B74FB" size={23} style={{ paddingRight: 10 }} />
            </View>
          </Card>
          <Card containerStyle={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, color: '#7E8FB9' }}>Área de experticia</Text>
              <Icon name="chevron-right" color="#5B74FB" size={23} style={{ paddingRight: 10 }} />
            </View>
          </Card>
          <Card containerStyle={styles.card}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 14, color: '#7E8FB9' }}>Fecha & hora</Text>
              <Icon name="chevron-right" color="#5B74FB" size={23} style={{ paddingRight: 10 }} />
            </View>
          </Card>
          <Card containerStyle={styles.card}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7E8FB9', paddingBottom: 5 }}>Tarifa</Text>
              <Slider
                min={min}
                max={max}
                step={1}
                disableRange={rangeDisabled}
                floatingLabel
                renderThumb={renderThumb}
                renderRail={renderRail}
                renderRailSelected={renderRailSelected}
                renderLabel={renderLabel}
                renderNotch={renderNotch}
                onValueChanged={handleValueChange}
              />
              <View style={styles.horizontalContainer}>
                <Text style={styles.valueText}>{low}.000COP</Text>
                <Text style={styles.valueText}>{high}.000COP</Text>
              </View>

            </View>
          </Card>
          <Card containerStyle={styles.card}>
            <View>
              <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#7E8FB9' }}>Descripción</Text>
              <TextInput
                placeholder="and"
                value={text}
                onChangeText={text => setText(text)}
                multiline={true}
                numberOfLines={2}
              />
            </View>
          </Card>
          <AppButton onPress={() => { }} title="AGENDAR ASESORÍA" style={{
            marginTop: 15,
            backgroundColor: "#4E31EB",
            borderColor: '#4E31EB',
          }} textStyle={{ color: '#fff' }} />
        </View>

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
    backgroundColor: '#F9F7FE'
  },
  title: {
    fontSize: 12,
    color: '#424049',
    paddingBottom: 3,
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
  listTab: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
    borderColor: '#4E31EB',
    borderTopWidth: 1.5,
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
      width: 5,
      height: 5,
    },
    shadowOpacity: 2,
    shadowRadius: 0,
    elevation: 1,
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
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  valueText: {
    color: '#7E8FB9',
    fontSize: 12,
  },
});

export default BusquedaScreen;
