import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Text, View, Button, Image } from 'react-native';
import axios from 'axios';

export default function DetailScreen({ navigation }) {
  const route = useRoute()
  const id = route.params?.id

  const [concert, setconcert] = useState("");
  console.log("sala999m", id)

  useEffect(() => {
    const url = "https://www.jambase.com/jb-api/v1/events/id/" + id + "?apikey=5e84383a-f25d-41f6-9519-651561931798"
    console.log("url", url)
    axios.get(url)
      .then(res => setconcert(res.data["event"]))
  }, [id])
  //if (concert !== "")


  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      
      <Image
        source={{ uri: concert["image"] }} style={{
          height: 150,
          width: 500,
          resizeMode: "cover",
          borderRadius: 16,

        }} />
      <Text style={{fontWeight:"800", fontSize:30, color:"black", textAlign:"center"}} >{concert["name"]}</Text>
      <Text>{concert["startDate"]}</Text>
      <Text>{concert["endDate"]}</Text>
      <Text>{concert["location"]["name"]}</Text>
      <Text>{concert["name"]}</Text>
      <Text>{concert["name"]}</Text>

      <Button
        title="Haritayı gör"
        onPress={() => navigation.navigate('Map', {id:id})}
      />
    </View>
  );
}
