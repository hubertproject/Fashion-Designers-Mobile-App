import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import Splash from "./Splash";
import Login from "./Login";
// import BottomTabNavigator from "./Navigation/BottomTabNavigator";
// import Profile from "./screens/Profile";
 
 
const Stack = createStackNavigator();

const NavScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Login" component={Login} />
      {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Fees" component={Fees} />
      <Stack.Screen name="TimeTable" component={TimeTable} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Update" component={Update} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Logo" component={Logo} /> */}
    </Stack.Navigator>
  );
};

export default NavScreens;
