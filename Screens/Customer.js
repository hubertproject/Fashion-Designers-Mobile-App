import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const Customer = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [charge, setCharge] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [customers, setCustomers] = useState([]);

  const handlePhoneNumberChange = (text) => {
    if (/^\d*$/.test(text)) {
      setPhoneNumber(text);
    }
  };

  const handleChargeChange = (text) => {
    if (/^\d*$/.test(text)) {
      setCharge(text);
    }
  };

  const handleAddCustomer = () => {
    const newCustomer = {
      id: Date.now(),
      name,
      address,
      phoneNumber,
      charge,
      dueDate,
    };

    setCustomers([...customers, newCustomer]);
    setName('');
    setAddress('');
    setPhoneNumber('');
    setCharge('');
    setDueDate('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Details</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Charge"
        value={charge}
        onChangeText={handleChargeChange}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Due Date (YYYY-MM-DD)"
        value={dueDate}
        onChangeText={setDueDate}
        style={styles.input}
        placeholderTextColor="#999"
      />
      <TouchableOpacity
        onPress={handleAddCustomer}
        style={styles.addButton}
      >
        <Text style={styles.buttonText}>Add Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Contact', { customers })}
        style={styles.viewButton}
      >
        <Text style={styles.buttonText}>View Contact</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: screenWidth * 0.06,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    fontSize: screenWidth * 0.04,
    paddingVertical: screenWidth * 0.03,
    paddingHorizontal: screenWidth * 0.02,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    padding: screenWidth * 0.02,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  viewButton: {
    backgroundColor: 'green',
    padding: screenWidth * 0.02,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: screenWidth * 0.04,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Customer;
