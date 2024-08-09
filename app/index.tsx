import { Stack } from 'expo-router';

import HomeScreen from '@screens/HomeScreen';

const Home = () => (
  <>
    <Stack.Screen
      options={{
        title: 'My home',
      }}
    />
    <HomeScreen />
  </>
);

export default Home;