import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer, useRoute  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home/HomeScreen';
import ConcertScreen from './src/screens/Concert/ConcertScreen';
import DetailScreen from './src/screens/Detail/DetailScreen';
import MapScreen from './src/screens/Map/MapScreen';
import FiltreScreen from './src/screens/Filtre/FiltreScreen';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Concert" component={ConcertScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="Filtre" component={FiltreScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
