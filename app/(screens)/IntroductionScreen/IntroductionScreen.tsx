import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Link } from 'expo-router';

export default function IntroductionScreen() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      key: 'slide1',
      title: 'Welcome!',
      content: 'Discover amazing features of our app.',
      backgroundColor: '#ff9999',
    },
    {
      key: 'slide2',
      title: 'Your Birth Date',
      content: 'Please enter your birth date.',
      backgroundColor: '#99ccff',
    },
    {
      key: 'slide3',
      title: 'All Set!',
      content: (
        <Link href="/navigation/(tabs)" push>
          Go to app
        </Link>
      ),
      backgroundColor: '#99ff99',
    },
  ];

  const renderItem = ({ item }: { item: unknown }) => (
    <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={Dimensions.get('window').width}
        style={styles.carousel}
        data={slides}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousel: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
  },
});