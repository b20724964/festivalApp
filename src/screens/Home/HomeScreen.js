import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anasayfa!</Text>
      <Button
        title="seçilen konsere git"
        onPress={() => navigation.navigate('Concert')}
      />
    </View>
  );
}
