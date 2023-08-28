import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Notification = ({ navigation }) => {
  // Function to handle image press and navigate to the corresponding measurement screen
  const handleImagePress = (dressType) => {
    navigation.navigate(dressType);
  };

  const dressData = [
    { name: 'Female Measurement', image: require('../assets/longs.png') },
    { name: 'Male Measurement', image: require('../assets/shirt.png') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imagesContainer}>
        {dressData.map((dress, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(dress.name)} style={styles.imageWrapper}>
            <View style={styles.imageContainer}>
              <Image source={dress.image} style={styles.image} />
            </View>
            <Text style={styles.imageName}>{dress.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imagesContainer: {
    flexDirection: 'column', // Vertical arrangement
    alignItems: 'center', // Center align the items horizontally
  },
  imageWrapper: {
    width: '100%', // Full width
    marginBottom: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%', // Full width
    borderRadius: 10,
    overflow: 'hidden', // Hide overflow for borderRadius to take effect
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  imageName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Notification;
