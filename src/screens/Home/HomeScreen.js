import React, { useState, useEffect } from 'react';
import { StatusBar, Button, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
const { width, height } = Dimensions.get('screen');

const imageW = width * 0.80;
const imageH = height * 0.5;

export default function HomeScreen({ navigation }) {
  const [festivals, setfestivals] = useState("");
  const onPress = () => setCount(prevCount => prevCount + 1);

  useEffect(() => {
    axios.get("https://www.jambase.com/jb-api/v1/events?apikey=5e84383a-f25d-41f6-9519-651561931798&geoCountryIso2=TR&perPage=40")
      .then(res => setfestivals(res.data))
  }, [])
  //if (festivals !== "")
  //  console.log("selam", festivals["events"][1]["performer"])
  return (
    <View style={{ flex: 1 }}>
      
      <Animated.FlatList
        data={festivals["events"]}
        horizontal
        pagingEnabled
        renderItem={({ item }) => (
          
          <ImageBackground
              source={{ uri: item["image"] }} style={{
              height: height * 1,
              width: width* 1,
              resizeMode: "cover",
              alignItems: "center"
              }} 
              blurRadius= {20}>
            
            <View style={{ width, alignItems: "center"}}>
              <View style={{ height: 50, width: 328, margin:10 }}>
                <Button
                  title="Filtrele"
                  color="#504099"
                  onPress={() => navigation.navigate('Filtre')}
                />
              </View>
              <Image
                source={{ uri: item["image"] }} style={{
                  height: imageH,
                  width: imageW,
                  resizeMode: "cover",
                  borderRadius: 16,
                  marginBottom: 5
                }} />
              <Text style={{fontWeight:"800", fontSize:30, color:"white", textAlign:"center", textTransform: "uppercase"}}>{item["performer"][0]["name"]}</Text>
              <View style={{ height: 50, width: 328, margin:10}}>
                <Button
                  title="Detayları gör"
                  color="#841584"
                  onPress={() => navigation.navigate('Detail', {id: item["identifier"]})}
                />
              </View>
              
              
            </View>
          </ImageBackground>
        )}
      />
    </View>
  );
}
