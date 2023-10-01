import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

const MaleMeasurement = () => {
  const [fabricImage, setFabricImage] = useState(null);
  const [designImage, setDesignImage] = useState(null);
  const [dressType, setDressType] = useState('');
  const [measurements, setMeasurements] = useState([
    { measurement: 'Chest', size: '' },
    { measurement: 'Waist', size: '' },
    { measurement: 'Seat', size: '' },
    { measurement: 'Bicep', size: '' },
    { measurement: 'Shirt Length', size: '' },
    { measurement: 'Shoulder Width', size: '' },
    { measurement: 'Sleeve Length', size: '' },
    { measurement: 'Cuff Circumference', size: '' },
    { measurement: 'Collar Size', size: '' },
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
    if (/^\d+$/.test(size) || size === '') {
      const updatedMeasurements = [...measurements];
      updatedMeasurements[index].size = size;
      setMeasurements(updatedMeasurements);
    }
  };

  const handleAddMoreDetails = () => {
    const newMeasurements = [{ measurement: '', size: '' }];

    setMeasurements([...measurements, ...newMeasurements]);
  };

  const handleDeleteDetails = (index) => {
    const updatedMeasurements = [...measurements];
    updatedMeasurements.splice(index, 1);
    setMeasurements(updatedMeasurements);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.dressTypeContainer}>
        <TextInput
          placeholder="Enter Dress Type"
          value={dressType}
          onChangeText={handleDressTypeChange}
          style={styles.dressTypeInput}
        />
      </View>

      <View style={styles.imagesContainer}>
        <TouchableOpacity onPress={() => handleSelectImage('fabric')}>
          <View style={styles.imageWrapper}>
            {fabricImage ? (
              <Image source={{ uri: fabricImage }} style={styles.image} />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Icon name="camera" size={screenWidth * 0.12} color="gray" />
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
                <Icon name="camera" size={screenWidth * 0.12} color="gray" />
                <Text style={styles.placeholderText}>Upload Design Image</Text>
              </View>
            )}
          </View>
          <Text style={styles.imageName}>Design Image</Text>
        </TouchableOpacity>
      </View>

      {measurements
        .slice()
        .reverse()
        .map((item, index) => (
          <View key={index} style={styles.inputsContainer}>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Measurement"
                value={item.measurement}
                onChangeText={(text) =>
                  handleMeasurementChange(measurements.length - index - 1, text)
                }
                style={styles.input}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholder="Size"
                value={item.size}
                onChangeText={(text) =>
                  handleSizeChange(measurements.length - index - 1, text)
                }
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
            <TouchableOpacity
              onPress={() => handleDeleteDetails(measurements.length - index - 1)}>
              <Icon name="trash" size={screenWidth * 0.08} color="red" />
            </TouchableOpacity>
          </View>
        ))}

      <TouchableOpacity onPress={handleAddMoreDetails} style={styles.addMoreButton}>
        <Text style={styles.addMoreButtonText}>Add More Details</Text>
        <Icon name="plus-circle" size={screenWidth * 0.06} color="red" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => alert('Saved')} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: screenWidth * 0.05, // Adjust padding based on screen width
  },
  dressTypeContainer: {
    marginBottom: screenWidth * 0.03, // Adjust margins based on screen width
  },
  dressTypeInput: {
    fontSize: screenWidth * 0.04, // Adjust font size based on screen width
    paddingVertical: screenWidth * 0.025, // Adjust padding based on screen width
    paddingHorizontal: screenWidth * 0.02,
    height: screenWidth * 0.1, // Adjust height based on screen width
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageWrapper: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: screenWidth * 0.4,
    height: screenWidth * 0.4,
    resizeMode: 'cover',
    margin: 10,
  },
  imagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
  },
  placeholderText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    color: 'gray',
  },
  imageName: {
    textAlign: 'center',
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
  },
  inputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: screenWidth * 0.02,
    marginBottom: 10,
    marginRight: 10,
    flex: 1, // Ensure input fields expand to fill available space
  },
  input: {
    flex: 1,
    height: screenWidth * 0.1, // Adjust input field height based on screen width
    paddingHorizontal: screenWidth * 0.01,
    fontSize: screenWidth * 0.03,
  },
  addMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: screenWidth * 0.02,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  addMoreButtonText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    marginRight: screenWidth * 0.02,
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    padding: screenWidth * 0.02,
    borderRadius: 5,
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
  },
});

export default MaleMeasurement;
