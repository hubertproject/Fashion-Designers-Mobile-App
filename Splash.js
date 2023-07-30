import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Simulating a delay for demonstration purposes
    setTimeout(() => {
      // Navigate to the main screen or any other screen
      navigation.replace('Login');
    }, 2000); // Splash screen duration in milliseconds
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/splash.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F52BA',
  },
  logo: {
    width: 440,
    height: 450,
  },
});

export default Splash;
