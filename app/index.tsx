import React from 'react';
import { Stack } from 'expo-router';
import IntroductionScreen from './(screens)/IntroductionScreen/IntroductionScreen';

const Test = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'My home',
          headerShown: false,
        }}
      />
      <IntroductionScreen />
    </>
  );
};

export default Test;
