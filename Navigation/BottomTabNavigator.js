import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../Screens/Home';
import Notification from '../Screens/Notification';
import Customer from '../Screens/Customer';
import Dresses from '../Screens/Dresses';
import Settings from '../Screens/Settings';

const Tab = createBottomTabNavigator();

const home = "Home";
const notification = "Notification";
const customer = "Customer";
const dresses = "Dresses";
const settings = "Settings";

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={home}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          display: "flex",
        },
        tabBarActiveTintColor: "#191970",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
          let rn = route.name;
          if (rn === home) {
            IconName = focused ? "home" : "home-outline";
          } else if (rn === customer) {
            IconName = focused ? "customer" : "customer-outline";
          } else if (rn === notification) {
            IconName = focused ? "notification" : "notification-outline";
            return (
              <View>
                <Ionicons name={IconName} size={size} color={color} />
                <View style={styles.notificationBadge}>
                  <Text style={styles.notificationBadgeText}>1</Text>
                </View>
              </View>
            );
          } else if (rn === dresses) {
            IconName = focused ? "dresses" : "dresses-outline";
          } else if (rn === settings) {
            IconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={IconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={customer} component={customer} />
      <Tab.Screen name={dresses} component={dresses} />
      <Tab.Screen name={notification} component={notification} />
      <Tab.Screen name={settings} component={Settings} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  notificationBadge: {
    position: 'absolute',
    top: -2,
    right: -15,
    backgroundColor: '#ff0000',
    borderRadius: 50,
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationBadgeText: {
    color: '#ffffff',
    fontSize: 10,
  },
});

export default BottomTabNavigator;
