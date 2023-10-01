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

const FemaleMeasurement = () => {
  const [fabricImage, setFabricImage] = useState(null);
  const [designImage, setDesignImage] = useState(null);
  const [dressType, setDressType] = useState('');
  const [measurements, setMeasurements] = useState([
    { measurement: 'Bust', size: '' },
    { measurement: 'Waist', size: '' },
    { measurement: 'Hip', size: '' },
    { measurement: 'Shoulder', size: '' },
    { measurement: 'Shoulder to Shoulder', size: '' },
    { measurement: 'Shoulder to Underbust', size: '' },
    { measurement: 'Shoulder to Nipple', size: '' },
    { measurement: 'Nipple to Nipple', size: '' },
    { measurement: 'Tip to Tip', size: '' },
    { measurement: 'Across Chest', size: '' },
    { measurement: 'Across Back', size: '' },
    { measurement: 'Shoulder to Waist', size: '' },
    { measurement: 'Shoulder to Hip', size: '' },
    { measurement: 'Kaba Length', size: '' },
    { measurement: 'Sleeve Length', size: '' },
    { measurement: 'Around Arm', size: '' },
    { measurement: 'Slit Length', size: '' },
    { measurement: 'Blouse Length', size: '' },
    { measurement: 'Skit Length', size: '' },
    { measurement: 'Dress Length', size: '' },
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
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
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
    padding: 20,
  },
  dressTypeContainer: {
    marginBottom: 10,
  },
  dressTypeInput: {
    fontSize: screenWidth * 0.06,
    paddingVertical: screenWidth * 0.03,
    paddingHorizontal: screenWidth * 0.02,
    height: screenWidth * 0.12,
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
    marginBottom: screenWidth * 0.03, // Adjust spacing between input fields
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: screenWidth * 0.35, // Adjust width to fit the screen
    marginRight: screenWidth * 0.02, // Adjust spacing between input fields
    paddingHorizontal: screenWidth * 0.02,
  },
  input: {
    flex: 1,
    height: screenWidth * 0.10,
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

export default FemaleMeasurement;
