import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
import { Card } from 'react-native-elements';

import ToggleSwitch from 'toggle-switch-react-native';

const DocProfile = () => {

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
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', margin: 10 }}>
                <View>
                    <Card containerStyle={styles.documentCard}>
                        {pdfSvg()}
                    </Card>
                </View>

                <View >
                    <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#424049' }}>
                        Rutina ejercicios 1
                    </Text>

                    <Text style={styles.title}>
                        <Text style={styles.bold}>Categories: </Text>
                        Young <Text style={{ fontWeight: 'bold', fontSize: 20 }}>.</Text>{' '}
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
                        <Text style={styles.bold}>peso: 1200 kb</Text>
                    </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', paddingLeft: 20, marginBottom: 15 }}>
                <ToggleSwitch
                    isOn={true}
                    onColor="#7F8FFF"
                    offColor="#7F8FFF"
                    size="small"
                    onToggle={isOn => !true}
                />
                <Text style={styles.itemTitle}>  Información excusiva para el profesional</Text>
            </View>
          
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F7FE',
        marginLeft: -10
    },
    title: {
        fontSize: 12,
        color: '#424049',
        paddingBottom: 3,
    },
    bold: {
        fontWeight: 'bold',
    },
    documentCard: {
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
    itemTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingTop: 3,
        paddingBottom: 3,
        color: '#7E8FB9',
    },
});

export default DocProfile;
