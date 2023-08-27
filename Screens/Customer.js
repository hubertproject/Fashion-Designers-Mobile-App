import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Dimensions,
  Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

const Customer = ({ navigation }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [charge, setCharge] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [customers, setCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [hasTriedSubmitting, setHasTriedSubmitting] = useState(false);

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
    if (name && address && phoneNumber && charge && dueDate) {
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
    } else {
      setShowModal(true);
      setHasTriedSubmitting(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
      <TouchableOpacity onPress={handleAddCustomer} style={styles.addButton}>
        <Text style={styles.buttonText}>Add Customer</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Contact', { customers })}
        style={styles.viewButton}
      >
        <Text style={styles.buttonText}>View Contact</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Please fill in all the required fields.
            </Text>
            <TouchableOpacity
              onPress={handleCloseModal}
              style={styles.modalButton}
            >
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});

export default Customer;
