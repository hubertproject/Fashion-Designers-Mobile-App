import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Dresses = ({ navigation }) => {
  // Function to handle image press and navigate to the form screen
  const handleImagePress = () => {
    navigation.navigate('CustomerForm');  
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imagesContainer}>
        {/* First Image */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/longs.png')}
            style={styles.image}
          />
          <Text style={styles.imageName}>LongSleeve</Text>
        </TouchableOpacity>

        {/* Second Image */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/shirt.png')}
            style={styles.image}
          />
          <Text style={styles.imageName}>Shirt</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imagesContainer}>
        {/* Third Image */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/fmalecoat.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageName}>Female Coat</Text>
        </TouchableOpacity>

        {/* Fourth Image */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/maleCoat.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageName}>Male Coat</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imagesContainer}>
        {/* Fifth Image */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/short.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageName}>Short</Text>
        </TouchableOpacity>

        {/* Sixth Image */}
        <TouchableOpacity onPress={handleImagePress}>
          <Image
            source={require('../assets/skirt.jpg')}
            style={styles.image}
          />
          <Text style={styles.imageName}>Shirt</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.plusIconContainer}>
        {/* Plus Icon */}
        <TouchableOpacity onPress={handleImagePress} style={styles.plusIcon}>
          <Icon name="plus-circle" size={40} color="green" />
          <Text style={styles.plusIconText}>Add Image</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    margin: 10,
    borderRadius: 10,
  },
  imageName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  plusIconContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  plusIcon: {
    alignItems: 'center',
    margin: 10,
  },
  plusIconText: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dresses;

