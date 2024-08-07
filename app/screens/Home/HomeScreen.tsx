// src/screens/HomeScreen.tsx
import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

export default function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}