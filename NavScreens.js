import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Splash from "./Splash";
// import Login from "./Login";
// import Signin from "./Signin";
import BottomTabNavigator from "./Navigation/BottomTabNavigator";
// import Profile from "./screens/Profile";
import Measurement from "./Screens/Dresses";
import CustomerForm from "./Screens/MeasurementForm";

const Stack = createStackNavigator();

const NavScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="CustomerForm"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Signin" component={Signin} /> */}
      <Stack.Screen name="Measurement" component={Measurement} /> 
      <Stack.Screen name="CustomerForm" component={CustomerForm} /> 

      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};

export default NavScreens;
