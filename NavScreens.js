import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Splash from "./Splash";
// import Login from "./Login";
// import Signin from "./Signin";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
// import Profile from "./screens/Profile";
import MeasurementForm from "./Screens/MeasurementForm";
import Dresses from "./Screens/Dresses";
import ShirtMeasurement from "./Screens/ShirtMeasurement";


const Stack = createStackNavigator();

const NavScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="ShirtMeasurement"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Signin" component={Signin} /> */}
      <Stack.Screen name="MeasurementForm" component={MeasurementForm} /> 
      <Stack.Screen name="Dresses" component={Dresses} /> 
      <Stack.Screen name="ShirtMeasurement" component={ShirtMeasurement} /> 

      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};

export default NavScreens;
