import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import BottomTabNavigator from "./Navigation/BottomTabNavigator";
import FemaleMeasurement from "./Screens/FemaleMeasurement";
import Dresses from "./Screens/Dresses";
import Customer from "./Screens/Customer";
import Contact from "./Screens/Contact";
import Home from "./Screens/Home";
 
 
import MaleMeasurement from "./Screens/MaleMeasurement";

const Stack = createStackNavigator();

const NavScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dresses"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="MaleMeasurement" component={MaleMeasurement} />
      <Stack.Screen name="Dresses" component={Dresses} />
      <Stack.Screen name="Customer" component={Customer} />
      <Stack.Screen name="FemaleMeasurement" component={FemaleMeasurement} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Home" component={Home} />
       
      {/* <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} /> */}
    </Stack.Navigator>
  );
};

export default NavScreens;
