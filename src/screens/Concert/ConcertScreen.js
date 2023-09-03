import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function ConcertScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Konser!</Text>
      <Button
        title="Detayları gör"
        onPress={() => navigation.navigate('Detail')}
      />
    </View>
  );
}
