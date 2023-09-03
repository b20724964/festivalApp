import React, {useState, useEffect} from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
const { width, height } = Dimensions.get('screen');

const imageW = width *0.80;
const imageH = height * 0.5;

export default function HomeScreen({ navigation }) {
  const [festivals, setfestivals] = useState("");
    useEffect(()=> {
        axios.get("https://www.jambase.com/jb-api/v1/events?apikey=5e84383a-f25d-41f6-9519-651561931798&geoCountryIso2=TR&perPage=20")
            .then(res =>setfestivals(res.data))
    },[])
    if(festivals!=="")
        console.log("selam", festivals["events"][1]["identifier"])
  return (
    <View style={{flex:1, backgroundColor:"#000"}}>
      <Text>Anasayfa!</Text>
      <FlatList
        data = {festivals["events"]}
        horizontal
        pagingEnabled
        renderItem={({item})=>(
            <View style={{width, justifyContent:"center", alignItems:"center"}}>
                <Text>{item["identifier"]}</Text>
                <Image
                    source={{uri: item["image"]}} style={{
                        height:imageH,
                        width:imageW,
                        resizeMode: "cover",
                        borderRadius:16
                }}/>
            </View>
        )}
      />
    </View>
  );
}
