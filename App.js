import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/Home/HomeScreen';
import ConcertScreen from './src/screens/Concert/ConcertScreen';
import DetailScreen from './src/screens/Detail/DetailScreen';
import MapScreen from './src/screens/Map/MapScreen';

function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="anasayfaya git"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


function MyTabs() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Concert" component={ConcertScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
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
