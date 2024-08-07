// src/screens/DetailsScreen.tsx
import * as React from 'react';
import { Button, View, Text } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

export default function DetailsScreen({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
