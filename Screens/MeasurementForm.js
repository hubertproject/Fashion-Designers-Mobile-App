import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const MeasurementForm = () => {
  const [fabricImage, setFabricImage] = useState(null);
  const [designImage, setDesignImage] = useState(null);
  const [dressType, setDressType] = useState('');
  const [measurements, setMeasurements] = useState([
    { measurement: '', size: '' },
    { measurement: '', size: '' },
    { measurement: '', size: '' },
  ]);

  const handleSelectImage = async (imageType) => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.cancelled) {
        if (imageType === 'fabric') {
          setFabricImage(result.uri);
        } else if (imageType === 'design') {
          setDesignImage(result.uri);
        }
      }
    } catch (error) {
      console.log('Error selecting image:', error);
    }
  };

  const handleDressTypeChange = (text) => {
    setDressType(text);
  };

  const handleMeasurementChange = (index, measurement) => {
    const updatedMeasurements = [...measurements];
    updatedMeasurements[index].measurement = measurement;
    setMeasurements(updatedMeasurements);
  };

  const handleSizeChange = (index, size) => {
    // Only update the size state if the input is a valid number
    if (/^\d+$/.test(size) || size === '') {
      const updatedMeasurements = [...measurements];
      updatedMeasurements[index].size = size;
      setMeasurements(updatedMeasurements);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Dress Type Input */}
      <View style={styles.dressTypeContainer}>
        <TextInput
          placeholder="Enter Dress Type"
          value={dressType}
          onChangeText={handleDressTypeChange}
          style={styles.dressTypeInput}
        />
      </View>

      {/* Fabric and Design Images */}
      <View style={styles.imagesContainer}>
        <TouchableOpacity onPress={() => handleSelectImage('fabric')}>
          <View style={styles.imageWrapper}>
            {fabricImage ? (
              <Image source={{ uri: fabricImage }} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Icon name="camera" size={40} color="gray" />
                <Text style={styles.placeholderText}>Upload Fabric Image</Text>
              </View>
            )}
          </View>
          <Text style={styles.imageName}>Fabric Image</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSelectImage('design')}>
          <View style={styles.imageWrapper}>
            {designImage ? (
              <Image source={{ uri: designImage }} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Icon name="camera" size={40} color="gray" />
                <Text style={styles.placeholderText}>Upload Design Image</Text>
              </View>
            )}
          </View>
          <Text style={styles.imageName}>Design Image</Text>
        </TouchableOpacity>
      </View>

      {/*  Measurement and Size Inputs */}
      {measurements.map((item, index) => (
        <View key={index} style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Measurement"
              value={item.measurement}
              onChangeText={(text) => handleMeasurementChange(index, text)}
              style={styles.input}
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Size (cm)"
              value={item.size}
              onChangeText={(text) => handleSizeChange(index, text)}
              keyboardType="numeric"
              style={styles.input}
            />
          </View>
        </View>
      ))}

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dressTypeContainer: {
    marginBottom: 10,
  },
  dressTypeInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageWrapper: {
    width: 150,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    margin: 10,
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
  },
  imageName: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputsContainer: {
    flexDirection: 'row',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
  },
});

export default MeasurementForm;
