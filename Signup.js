
// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as RNLocalize from 'react-native-localize';

// // Country codes data (replace this with your own country codes list)
// const countryCodes = [
//   { country: 'Ghana', countryCode: 'GH', callingCode: '+233' },
//   { country: 'Nigeria', countryCode: 'NG', callingCode: '+234' },
//   // Add more country codes as needed
// ];

// const CountryCodeDropdown = ({ onSelectCountry }) => {
//   // Get the user's current locale (country)
//   const userCountry = RNLocalize.getCountry();

//   // Find the country code corresponding to the user's country (if available)
//   const defaultCountryCode = countryCodes.find((item) => item.countryCode === userCountry);

//   // Set the default selected country based on the user's country or use the first country code in the list
//   const [selectedCountry, setSelectedCountry] = useState(defaultCountryCode || countryCodes[0]);

//   // State variable to toggle visibility of the dropdown
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   // Function to update the selected country
//   const handleSelectCountry = (item) => {
//     setSelectedCountry(item);
//     onSelectCountry(item);
//     setIsDropdownVisible(false); // Close the dropdown after selecting a country
//   };

//   return (
//     <View style={styles.countryCodeContainer}>
//       {/* Country code dropdown */}
//       <TouchableOpacity
//         style={styles.countryCodeButton}
//         onPress={() => setIsDropdownVisible((prevState) => !prevState)}
//       >
//         <Text style={styles.countryCodeText}>{selectedCountry.callingCode}</Text>
//         <Icon name="caret-down" size={20} color="blue" />
//       </TouchableOpacity>
//       {/* Country code dropdown list */}
//       {isDropdownVisible && (
//         <View style={styles.dropdownContainer}>
//           {countryCodes.map((item) => (
//             <TouchableOpacity
//               key={item.countryCode}
//               style={styles.dropdownItem}
//               onPress={() => handleSelectCountry(item)}
//             >
//               <Text>{item.country}</Text>
//               <Text>{item.callingCode}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const SignupScreen = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

//   const handleSignup = () => {
//     // Implement signup logic here, such as calling an API to create a new user account
//     console.log('Signup details:', {
//       phoneNumber: selectedCountry.callingCode + phoneNumber,
//       password,
//       confirmPassword,
//       email,
//     });
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>Signup</Text>
//       <View style={styles.inputContainer}>
//         {/* Render the CountryCodeDropdown component here */}
//         <CountryCodeDropdown onSelectCountry={setSelectedCountry} />
//         <TextInput
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//           keyboardType="phone-pad"
//           style={styles.input}
//           maxLength={10} // Set the maximum input length for the phone number field
//         />
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={!showPassword}
//           style={[styles.input, showPassword && styles.inputWithIcon]}
//         />
//         <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleIcon}>
//           <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="blue" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Confirm Password"
//           value={confirmPassword}
//           onChangeText={setConfirmPassword}
//           secureTextEntry={!showConfirmPassword}
//           style={[styles.input, showConfirmPassword && styles.inputWithIcon]}
//         />
//         <TouchableOpacity onPress={toggleConfirmPasswordVisibility} style={styles.toggleIcon}>
//           <Icon name={showConfirmPassword ? 'eye-slash' : 'eye'} size={20} color="blue" />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           keyboardType="email-address"
//           style={styles.input}
//         />
//       </View>
//       <TouchableOpacity onPress={handleSignup} style={styles.signupButton}>
//         <Text style={styles.signupButtonText}>Signup</Text>
//       </TouchableOpacity>
//       <View style={styles.loginContainer}>
//         <Text style={styles.haveAccountText}>Have an account?</Text>
//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     width: '100%',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   input: {
//     flex: 1,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//   },
//   inputWithIcon: {
//     paddingRight: 40, // Add extra space for the eye icon
//   },
//   toggleIcon: {
//     position: 'absolute',
//     right: 10,
//     top: 15,
//   },
//   signupButton: {
//     backgroundColor: 'blue',
//     width: '100%',
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   signupButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     marginTop: 10,
//   },
//   haveAccountText: {
//     color: 'black',
//     marginRight: 5,
//   },
//   loginButton: {
//     borderBottomWidth: 1,
//     borderBottomColor: 'blue',
//   },
//   loginButtonText: {
//     color: 'blue',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   countryCodeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 10,
     
//   },
//   countryCodeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     height: 50,
//   },
//   countryCodeText: {
//     marginRight: 5,
//   },
//   dropdownContainer: {
//     position: 'absolute',
//     top: 60,
//     left: 20,
//     zIndex: 1,
//     backgroundColor: '#fff',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     width: 150,
//   },
//   dropdownItem: {
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
// });

// export default SignupScreen;
