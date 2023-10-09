import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { View, Text } from "react-native";
import { Home, Contact, Customer, Dresses, Settings } from "./Screens/BottomScreens";
import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function NavScreens() {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 0, // Set the height to zero
      backgroundColor: "#fff", // Fix the typo here
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Entypo
                  name="home"
                  size={24}
                  color={focused ? "blue" : "red"}
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "red" }}>
                  HOME
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Entypo
                  name="user"
                  size={24}
                  color={focused ? "blue" : "red"}
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "red" }}>
                  CONTACT
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Dresses"
          component={Dresses}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Entypo
                  name="dress"
                  size={24}
                  color={focused ? "blue" : "red"}
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "red" }}>
                  DRESSES
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Customer"
          component={Customer}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Entypo
                  name="customer"
                  size={24}
                  color={focused ? "blue" : "red"}
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "red" }}>
                  CUSTOMER
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings} 
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <Entypo
                  name="settings"
                  size={24}
                  color={focused ? "blue" : "red"}
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "red" }}>
                  SETTINGS
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
