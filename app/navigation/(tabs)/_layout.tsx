import React from 'react';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="HomeScreen/HomeScreen"
        options={{ title: 'Home', headerShown: false }}
      />
      <Tabs.Screen
        name="ProfileScreen/ProfileScreen"
        options={{ title: 'Profile', headerShown: false }}
      />
    </Tabs>
  );
};

export default Layout;
