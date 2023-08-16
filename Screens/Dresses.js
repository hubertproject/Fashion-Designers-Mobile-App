import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const windowWidth = Dimensions.get('window').width;

const Dresses = ({ navigation }) => {
  // Function to handle image press and navigate to the corresponding measurement screen
  const handleImagePress = (dressType) => {
    navigation.navigate(`${dressType}Measurement`);
  };

  const dressData = [
    { name: 'LongSleeve', image: require('../assets/longs.png') },
    { name: 'Shirt', image: require('../assets/shirt.png') },
    { name: 'Female Coat', image: require('../assets/fmalecoat.jpg') },
    { name: 'Male Coat', image: require('../assets/maleCoat.jpg') },
    { name: 'Short', image: require('../assets/short.jpg') },
    { name: 'Skirt', image: require('../assets/skirt.jpg') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imagesContainer}>
        {dressData.map((dress, index) => (
          <TouchableOpacity key={index} onPress={() => handleImagePress(dress.name)} style={styles.imageWrapper}>
            <Image source={dress.image} style={styles.image} />
            <Text style={styles.imageName}>{dress.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.plusIconContainer}>
        {/* Plus Icon */}
        <TouchableOpacity onPress={() => navigation.navigate('MeasurementForm')} style={styles.plusIcon}>
          <Icon name="plus-circle" size={40} color="green" />
          <Text style={styles.plusIconText}>Add Dress</Text>
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: '49%', // Two images per row with a little spacing in between
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
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
