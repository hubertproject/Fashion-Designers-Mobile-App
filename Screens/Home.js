import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const RectangleComponent = ({ title, content, onPress }) => {
  return (
    <TouchableOpacity style={styles.rectangle} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
};

const Home = ({ navigation }) => {
  const navigateToContact = () => {
    navigation.navigate('Contact');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <RectangleComponent
        title="Rectangle 1"
        content="This is the content of rectangle 1."
        onPress={navigateToContact}
      />
      <RectangleComponent
        title="Rectangle 2"
        content="This is the content of rectangle 2."
      />
      <RectangleComponent
        title="Rectangle 3"
        content="This is the content of rectangle 3."
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  rectangle: {
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
  },
});

export default Home;
