import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-elements';
import Svg, {G, Path, Rect, Defs, ClipPath} from 'react-native-svg';
import {FlatGrid} from 'react-native-super-grid';
import AppHeader from '../components/AppHeader';
import ListTab from '../components/ListTab';
import Profile from '../components/Profile';
import Recomendo from '../components/Recomendo';
import Historial from '../components/Historial';

const firstData = [
  {
    name: 'first',
    data: [
      {
        id: 1,
        date: '03/10/2022',
        title: 'Nombre completo',
        description: 'Morbin tincide',
      },
      {
        id: 2,
        date: '03/10/2022',
        title: 'Nombre completo',
        description: 'Morbin tincide',
      },
    ],
  },
];

const secondData = [
  {
    name: 'second',
    data: [
      {
        id: 1,
        date: '03/10/2022',
        title: 'Nombre completo',
        description:
          'Loremsum matiatus lorem ipsum dolor sim lorem ipsum dolor amet',
        body: 'Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum. Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum',

        check: true,
        checkInfo: 'Información excusiva para el profesional',
      },
      {
        id: 2,
        date: '03/10/2022',
        title: 'Nombre completo',
        description: 'Morbi tin ipsum',
        body: 'Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum. Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum',
        check: false,
        checkInfo: 'Informacion excusive para et professional',
      },
      {
        id: 3,
        date: '03/10/2022',
        title: 'Nombre completo',
        description: 'Morbi tin ipsum',
        body: 'Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum. Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum',
        check: false,
        checkInfo: 'Informacion excusive para et professional',
      },
      {
        id: 4,
        date: '03/10/2022',
        title: 'Nombre completo',
        description: 'Morbi tin ipsum',
        body: 'Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum. Morbi tincidunt metus quis justo lobortis tristique. Fusce magna lectus, sollicitudin in erat eget, molestie euismod ipsum',
        check: false,
        checkInfo: 'Informacion excusive para et professional',
      },
    ],
  },
];

const thirdData = [
  {
    name: 'third',
    data: [
      {
        id: 1,
        file: () => pdfSvg(),
        title: 'Nombre completo sabing glory of those ',
        size: '125 kb',
      },
      {
        id: 2,
        file: () => videoSvg(),
        title: 'Nombre completo sabing glory of those ',
        size: '125 kb',
      },
      {
        id: 3,
        file: () => wordSvg(),
        title: 'Nombre completo sabing glory of those ',
        size: '125 kb',
      },
      {
        id: 4,
        file: () => pdfSvg(),
        title: 'Nombre completo sabing glory of those ',
        size: '125 kb',
      },
    ],
  },
];

const fourthData = [
  {
    name: 'fourth',
    data: [
      {
        id: 1,
        client: '03/10/2022',
        category: 'Nombre completo',
        fetcha: 'Morbin tincide',
        hora: '4:00 PM',
        tiempo: '44 minutes',
      },
      {
        id: 2,
        client: '03/10/2022',
        category: 'Nombre completo',
        fetcha: 'Morbin tincide',
        hora: '4:00 PM',
        tiempo: '44 minutes',
      },
    ],
  },
];

const videoSvg = () => {
  return (
    <Svg
      width="50"
      height="49"
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.812 6.67572e-06H29.535L43.6999 14.4824V42.6186C43.6999 46.1408 40.7824 49 37.1883 49H12.812C9.21793 49 6.30038 46.1408 6.30038 42.6186V6.3814C6.30038 2.8592 9.21793 6.67572e-06 12.812 6.67572e-06V6.67572e-06Z"
          fill="#4E31EB"
        />
        <Path
          opacity="0.302"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.5139 6.67572e-06V14.3581H43.7L29.5139 6.67572e-06Z"
          fill="white"
        />
        <Path
          d="M33.6577 26.2301C33.4886 26.1057 33.2348 26.1057 33.0446 26.1886L28.8374 28.2605V26.7687C28.8374 25.7121 27.9917 24.8834 26.9135 24.8834H17.9494C16.8923 24.8834 16.0256 25.7121 16.0256 26.7687V34.2897C16.0256 35.3463 16.8924 36.1751 17.9494 36.1751H26.9135C27.9917 36.1751 28.8374 35.3463 28.8374 34.2897V32.7979L33.0446 34.8698C33.3617 35.0148 33.7423 34.8905 33.9114 34.5797C33.9537 34.4968 33.9748 34.3933 33.9748 34.2897V26.7687C33.9748 26.5408 33.848 26.3336 33.6577 26.2301ZM22.4315 33.0465C21.015 33.0465 19.8734 31.907 19.8734 30.5188C19.8734 29.1306 21.015 28.0118 22.4315 28.0118C23.848 28.0118 24.9896 29.1306 24.9896 30.5188C24.9896 31.907 23.848 33.0465 22.4315 33.0465Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="50" height="49" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const wordSvg = () => {
  return (
    <Svg
      width="50"
      height="49"
      viewBox="0 0 50 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path
          d="M12.8005 6.67572e-06H29.5345L43.7007 14.4766V42.6288C43.7007 46.1443 40.7867 49 37.1899 49H12.8006C9.21333 49 6.29933 46.1443 6.29933 42.6288V6.37124C6.29927 2.85573 9.21327 6.67572e-06 12.8005 6.67572e-06V6.67572e-06Z"
          fill="#0263D1"
        />
        <Path
          opacity="0.302"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M29.5155 6.67572e-06V14.3636H43.7009L29.5155 6.67572e-06Z"
          fill="white"
        />
        <Path
          d="M31.5927 25.4944H18.4075C17.8016 25.4944 17.3015 25.0137 17.3015 24.42C17.3015 23.8262 17.8016 23.3455 18.4075 23.3455H31.5927C32.1986 23.3455 32.6891 23.8262 32.6891 24.42C32.6891 25.0137 32.1986 25.4944 31.5927 25.4944ZM27.1977 38.4159H18.4075C17.8016 38.4159 17.3015 37.9352 17.3015 37.3415C17.3015 36.7477 17.8016 36.2671 18.4075 36.2671H27.1977C27.8036 36.2671 28.294 36.7477 28.294 37.3415C28.294 37.9352 27.8036 38.4159 27.1977 38.4159ZM31.5927 34.1087H18.4075C17.8016 34.1087 17.3015 33.628 17.3015 33.0343C17.3015 32.4406 17.8016 31.9599 18.4075 31.9599H31.5927C32.1986 31.9599 32.6891 32.4406 32.6891 33.0343C32.6891 33.628 32.1986 34.1087 31.5927 34.1087ZM31.5927 29.8015H18.4075C17.8016 29.8015 17.3015 29.3209 17.3015 28.7271C17.3015 28.1334 17.8016 27.6527 18.4075 27.6527H31.5927C32.1986 27.6527 32.6891 28.1334 32.6891 28.7271C32.6891 29.3209 32.1986 29.8015 31.5927 29.8015Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="50" height="49" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const pdfSvg = () => {
  return (
    <Svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.5562 6.67572e-06H28.9385L42.823 14.4723V42.621C42.823 46.1472 39.9702 49 36.4562 49H12.5562C9.02994 49 6.17712 46.1472 6.17712 42.621V6.37904C6.17706 2.85282 9.02988 6.67572e-06 12.5562 6.67572e-06V6.67572e-06Z"
          fill="#E5252A"
        />
        <Path
          opacity="0.302"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M28.9261 6.67572e-06V14.3621H42.8229L28.9261 6.67572e-06Z"
          fill="white"
        />
        <Path
          d="M13.2662 36.5602V27.6099H17.0741C18.0169 27.6099 18.7638 27.8671 19.327 28.3936C19.8902 28.9078 20.1718 29.6057 20.1718 30.475C20.1718 31.3443 19.8902 32.0422 19.327 32.5565C18.7638 33.083 18.0169 33.3401 17.0741 33.3401H15.5558V36.5602H13.2662ZM15.5558 31.3933H16.8169C17.1598 31.3933 17.4291 31.3198 17.6128 31.1485C17.7964 30.9893 17.8945 30.7689 17.8945 30.4751C17.8945 30.1812 17.7965 29.9608 17.6128 29.8017C17.4292 29.6302 17.1598 29.5568 16.8169 29.5568H15.5558V31.3933ZM21.1145 36.5602V27.6099H24.2857C24.9101 27.6099 25.4979 27.6956 26.0488 27.8793C26.5998 28.0629 27.1018 28.3201 27.5425 28.6752C27.9833 29.018 28.3384 29.4833 28.5955 30.071C28.8404 30.6587 28.9751 31.3321 28.9751 32.0912C28.9751 32.8381 28.8404 33.5115 28.5955 34.0992C28.3384 34.6869 27.9833 35.1522 27.5425 35.495C27.1017 35.85 26.5998 36.1071 26.0488 36.2908C25.4979 36.4745 24.9101 36.5602 24.2857 36.5602H21.1145ZM23.3552 34.6135H24.0163C24.3714 34.6135 24.702 34.5768 25.0081 34.491C25.3019 34.4053 25.5835 34.2706 25.8529 34.087C26.11 33.9033 26.3182 33.6462 26.4651 33.3034C26.612 32.9606 26.6855 32.5565 26.6855 32.0912C26.6855 31.6137 26.612 31.2096 26.4651 30.8668C26.3182 30.524 26.11 30.2669 25.8529 30.0832C25.5835 29.8996 25.302 29.7649 25.0081 29.6792C24.702 29.5935 24.3714 29.5567 24.0163 29.5567H23.3552V34.6135ZM30.126 36.5602V27.6099H36.4929V29.5567H32.4156V30.9892H35.6725V32.9238H32.4156V36.5602H30.126Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="49" height="49" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const DetailsAsesoriaScreen = props => {
  const [status, setStatus] = useState('Ficha personal');
  const [datalist, setDatalist] = useState(firstData);
  const setStatusFilter = status => {
    // Change this to switch
    if (status === 'Ficha personal') {
      setDatalist(firstData);
    } else if (status === 'Recomendaciones') {
      setDatalist(secondData);
    } else if (status === 'Documentos') {
      setDatalist(thirdData);
    } else if (status === 'Historial') {
      setDatalist(fourthData);
    }
    setStatus(status);
  };

  const renderItem = ({item, index}) => {
    //   Change this to switch
    if (item.name === 'first') {
      // Change this to a component
      return item.data.map((e, i) => (
        <View key={i} style={styles.itemContainer}>
          <View style={styles.itemBody}>
            <Card containerStyle={styles.card}>
              <View>
                <Text style={{fontSize: 14, color: '#7E8FB9'}}>{e.date}</Text>
                <Text style={styles.itemTitle}>{e.title}</Text>
                <Text style={{fontSize: 14, color: '#424049'}}>
                  {e.description}
                </Text>
              </View>
            </Card>
          </View>
        </View>
      ));
    } else if (item.name === 'second') {
      {
        /*  Second Tab  Begin */
      }
      return item.data.map((e, i) => <Recomendo key={i} index={i} data={e} />);
      {
        /*  Second Tab  End */
      }
    } else if (item.name === 'fourth') {
      {
        /*  Fourth Tab  Begin */
      }
      return item.data.map((e, i) => <Historial key={i} index={i} data={e} />);
      {
        /*  Fourth Tab  End */
      }
    } else {
      return (
        <View key={index} style={styles.item3Container}>
          <View style={styles.itemBody}>
            <View>
              <Card containerStyle={styles.documentCard}>
                <View style={{alignItems: 'center'}}>{item.file()}</View>
              </Card>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 12,
                  color: '#424049',
                  paddingLeft: 20,
                  paddingRight: 20,
                }}>
                {item.title}
              </Text>
              <Text style={[styles.itemTitle, {paddingLeft: 20}]}>
                {item.size}
              </Text>
            </View>
          </View>
        </View>
      );
    }
  };

  // Main View of the application
  return (
    <SafeAreaView style={styles.container}>
      {/* App Header Begin*/}
      <AppHeader />
      {/* App Header End*/}

      {/* Top profile being */}
      <Profile />
      {/* Top profile end */}

      {/* List of Items  */}
      <View style={{flex: 1, backgroundColor: '#F9F7FE'}}>
        <View style={styles.listTab}>
          {ListTab.map(e => (
            <TouchableOpacity
              onPress={() => setStatusFilter(e.status)}
              key={e.status}
              style={[
                styles.btnTab,
                status === e.status && styles.btnTabActive,
              ]}>
              {status === e.status && e.active()}
              {status !== e.status && e.inactive()}
              <Text
                style={[
                  styles.textTab,
                  status === e.status && styles.textTabActive,
                ]}>
                {e.status}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {datalist[0].name === 'third' ? (
          <View style={{flex: 2.0}}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                color: '#424049',
                paddingLeft: 20,
              }}>
              Documentos recientes
            </Text>

            <FlatGrid
              itemDimension={120}
              spacing={0}
              data={datalist[0].data}
              style={styles.gridView}
              renderItem={renderItem}
            />
          </View>
        ) : (
          <FlatList
            key={'#'}
            data={datalist}
            keyExtractor={(e, i) => e.name}
            renderItem={renderItem}
            numColumns={1}
          />
        )}
      </View>
      {/* End List of Items  */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    color: '#5B74FB',
    fontSize: 14,
    fontWeight: 'bold',
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

export default DetailsAsesoriaScreen;
