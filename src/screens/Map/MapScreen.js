import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useRoute } from '@react-navigation/native';

export default function MapScreen({ navigation }) {
  const route = useRoute()
  const latitude = route.params?.latitude
  const longitude = route.params?.longitude
  
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} />
      </MapView>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
