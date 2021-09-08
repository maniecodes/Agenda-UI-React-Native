import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import DetailsAsesoriaScreen from '../screens/DetailsAsesoria';
import Page1Screen from '../screens/Page1';
import Page2Screen from '../screens/Page2';

// const fullScreenWidth = Dimensions.get('window').width;

const Stack = createStackNavigator();

function DetailStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.screen name="hi" component={DetailsAsesoriaScreen} />
    </Stack.Navigator>
  );
}

function Page1StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.screen name="do" component={Page1Screen} />
    </Stack.Navigator>
  );
}

function Page2StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.screen name="sd" component={Page2Screen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitle: () => <Text>Header</Text>,
          tabBarIcon: ({focused, color, size, padding}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'home' : 'home-outline';
            }

            return (
              <Icon name={{iconName}} type="material" color="blue" size={23} />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'lightseagreen',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={DetailStackScreen} />
        <Tab.Screen name="About" component={Page1StackScreen} />
        <Tab.Screen name="Profile" component={Page2StackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
