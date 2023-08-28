import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Contact = ({ route }) => {
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const customersData = route.params?.customers || [];
    setCustomers(customersData);
  }, [route.params]);

  const toggleCustomerDetails = (customerId) => {
    const updatedCustomers = customers.map(customer => {
      if (customer.id === customerId) {
        return { ...customer, showDetails: !customer.showDetails };
      }
      return customer;
    });
    setCustomers(updatedCustomers);
  };

  const filteredCustomers = customers.filter(customer => {
    return customer.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Customer Contact</Text>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={40} color="#999" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
      </View>
      {filteredCustomers.map((customer) => (
        <View key={customer.id}>
          <TouchableOpacity
            onPress={() => toggleCustomerDetails(customer.id)}
            style={styles.customerContainer}
          >
            <Text style={styles.customerName}>{customer.name}</Text>
          </TouchableOpacity>
          {customer.showDetails && (
            <View style={styles.customerDetails}>
              <Text>Address: {customer.address}</Text>
              <Text>Phone Number: {customer.phoneNumber}</Text>
              <Text>Charge: {customer.charge}</Text>
              <Text>Due Date: {customer.dueDate.toDateString()}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    height: 40,
  },
  customerContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  customerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
  customerDetails: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
});

export default Contact;
