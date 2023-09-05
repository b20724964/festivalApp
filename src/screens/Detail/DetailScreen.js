import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { Icon } from '@rneui/themed';

export default function DetailScreen({ navigation }) {
  const route = useRoute()
  const id = route.params?.id

  const [concert, setconcert] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://www.jambase.com/jb-api/v1/events/id/" + id + "?apikey=5e84383a-f25d-41f6-9519-651561931798"
    //console.log("url", url)
    axios.get(url)
      .then(res => {
        setconcert(res.data["event"])
        setLoading(false)
      })
  }, [id])
  
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1,  alignItems: 'center', backgroundColor:"#504099" }}>
      
      <Image
        source={{ uri: concert["image"] }} style={{
          height: 150,
          width: 500,
          resizeMode: "cover",
          borderRadius: 16,

        }} />
      <View style={{textAlign:"center", backgroundColor:"#841584", height: 70, width: 500, alignItems: 'center'}}>
        <Text style={{fontWeight:"800", fontSize:35, color:"white", margin:10, textAlign:"center", textTransform: "uppercase"}} >{concert["performer"][0]["name"]}</Text>
      </View>  
      <View style={{textAlign:"center", backgroundColor:"black", height: 30, width: 500, alignItems: 'center'}}>
        <Text style={{fontWeight:"800", fontSize:20, color:"white", margin:0, textAlign:"center", textTransform: "uppercase"}} >{concert["performer"][0]["genre"].toString()}</Text>
      </View>
      <View style={{textAlign:"center", backgroundColor:"#313866", height: 70, width: 500, alignItems: 'center'}}>
        <Text style={{fontWeight:"400", fontSize:32, color:"white", margin:10}}>{concert["startDate"].split("T")[1].slice(0, -3)}    {concert["endDate"]}</Text>
      </View>
      <Text style={{fontWeight:"400", fontSize:25, color:"white", margin:20, textAlign:"center"}}> {concert["location"]["name"]}</Text>
      
      <Text style={{fontWeight:"400", fontSize:30, color:"white", margin:20}}> <Icon name='location-on' color="white"/> {concert["location"]["address"]["addressLocality"]}, {concert["location"]["address"]["addressCountry"]["name"]}  </Text>
      
      
      

      <View style={{ height: 50, width: 300, }}>
        <Button 
          title="Haritayı gör"
          color="#9D44C0"
          onPress={() => navigation.navigate('Map', {
            latitude: concert["location"]["geo"]["latitude"],
            longitude:concert["location"]["geo"]["longitude"],
          })}
          
        />
      </View>
      <View style={{ height: 50, width: 300, }}>
        <Button 
          title="Bilet Al"
          color= "#EC53B0"
          onPress={() => navigation.navigate('Map', {id:id})}
          
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
