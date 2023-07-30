import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as RNLocalize from 'react-native-localize';
import firebase from './config'; // Replace './config' with the correct path to your config.js file

// Country codes data (replace this with your own country codes list)
const countryCodes = [
  { country: 'Ghana', countryCode: 'GH', callingCode: '+233' },
  { country: 'Nigeria', countryCode: 'NG', callingCode: '+234' },
  // Add more country codes as needed
];

const CountryCodeDropdown = ({ onSelectCountry }) => {
  // Get the user's current locale (country)
  const userCountry = RNLocalize.getCountry();

  // Find the country code corresponding to the user's country (if available)
  const defaultCountryCode = countryCodes.find((item) => item.countryCode === userCountry);

  // Set the default selected country based on the user's country or use the first country code in the list
  const [selectedCountry, setSelectedCountry] = useState(defaultCountryCode || countryCodes[0]);

  // State variable to toggle visibility of the dropdown
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Function to update the selected country
  const handleSelectCountry = (item) => {
    setSelectedCountry(item);
    onSelectCountry(item);
    setIsDropdownVisible(false); // Close the dropdown after selecting a country
  };

  return (
    <View style={styles.countryCodeContainer}>
      {/* Country code dropdown */}
      <TouchableOpacity
        style={styles.countryCodeButton}
        onPress={() => setIsDropdownVisible((prevState) => !prevState)}
      >
        <Text style={styles.countryCodeText}>{selectedCountry.callingCode}</Text>
        <Icon name="caret-down" size={20} color="blue" />
      </TouchableOpacity>
      {/* Country code dropdown list */}
      {isDropdownVisible && (
        <View style={styles.dropdownContainer}>
          {countryCodes.map((item) => (
            <TouchableOpacity
              key={item.countryCode}
              style={styles.dropdownItem}
              onPress={() => handleSelectCountry(item)}
            >
              <Text>{item.country}</Text>
              <Text>{item.callingCode}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSendVerificationCode = async () => {
    try {
      const phoneProvider = firebase.auth.PhoneAuthProvider;
      const number = selectedCountry.callingCode + phoneNumber; // Use the selectedCountry here
      const confirmation = await phoneProvider.verifyPhoneNumber(number, true);
      setConfirmationResult(confirmation);
      Alert.alert('Verification Code Sent', 'Please enter the OTP you received.');
    } catch (error) {
      console.log('Error sending verification code:', error);
      Alert.alert('Error', 'Failed to send verification code.');
    }
  };

  


  const handleVerifyOTP = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);
      // User successfully logged in.
      Alert.alert('Success', 'You are now logged in.');
    } catch (error) {
      console.log('Error verifying OTP:', error);
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.inputContainer}>
        {/* Render the CountryCodeDropdown component here */}
        <CountryCodeDropdown onSelectCountry={(item) => setSelectedCountry(item)} />
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.input}
          maxLength={10} // Set the maximum input length for the phone number field
        />
      </View>
      <TextInput
        placeholder="Enter OTP"
        value={verificationCode}
        onChangeText={setVerificationCode}
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={handleSendVerificationCode} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Send OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVerifyOTP} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 50,
  },
  countryCodeText: {
    marginRight: 5,
  },
  dropdownContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 150,
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;
