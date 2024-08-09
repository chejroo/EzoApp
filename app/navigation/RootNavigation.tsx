import HomeScreen from '@app/screens/HomeScreen/HomeScreen';
import IntroScreen from '@app/screens/IntroScreen/IntroScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['http://localhost:8081'],
  config: {
    screens: {
      Home: '',
      Details: 'details',
    },
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}