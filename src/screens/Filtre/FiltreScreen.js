import * as React from 'react';
import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function FiltreScreen({ navigation }) {
    const [counter, setCounter] = useState(0)
    const [performarName, setPerformarName] = useState("")
    const [venueName, setVenueName] = useState("")
    const [toDate, setToDate] = useState("")
    const [genreSlug, setGenreSlug] = useState("")


    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#504099",
                color:"white"
            }}>

            <TextInput value={performarName} onChangeText={setPerformarName} style={stylesi.input} placeholder="Sanatçı/Grup İsmi" placeholderTextColor="white" ></TextInput>
            <TextInput value={venueName} onChangeText={setVenueName} style={stylesi.input} placeholder="Mekan İsmi" placeholderTextColor="white" ></TextInput>
            <TextInput value={toDate} onChangeText={setToDate} style={stylesi.input} placeholder="Aranacak Son Tarih: 2023-08-05" placeholderTextColor="white" ></TextInput>
            <TextInput value={genreSlug} onChangeText={setGenreSlug} style={stylesi.input} placeholder="Müzik Tarzı" placeholderTextColor="white" ></TextInput>
            <View style={{ height: 50, width: 300, }}>
                <Button 
                title="Filtrele"
                color="#974EC3"
                onPress={() => navigation.navigate('Home', {
                    performarName:performarName,
                    venueName:venueName,
                    toDate:toDate,
                    genreSlug:genreSlug
                })}
                
                />
            </View>
        </View>
    );
}



const stylesi = StyleSheet.create({
    input: {
      height: 40,
      width:300,
      margin: 12,
      borderWidth: 1,
      borderRadius:5,
      borderColor:"white",
      padding: 10,
      color:"white",
      fontSize:15,

    },
  });