// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet, View, Text, Image } from 'react-native';
// import Home from '../Screens/Home';
 
// import Customer from '../Screens/Customer';
// import Contact from '../Screens/Contact';
// import Settings from '../Screens/Settings';

// const Tab = createBottomTabNavigator();

// const home = "Home";
 
// const customer = "Customer";
// const contact = "Contact";
// const settings = "Settings";

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={home}
//       screenOptions={({ route }) => ({
//         // ... (other options)
//         tabBarIcon: ({ focused, color, size }) => {
//           let IconSource;
//           let rn = route.name;
//           if (rn === home) {
//             IconSource = focused ? require('../assets/home-focused.png') : require('../assets/home-outline.png');
//           } else if (rn === customer) {
//             IconSource = focused ? require('../assets/customer-focused.png') : require('../assets/customer-outline.png');
//           } else if (rn === notification) {
//             IconSource = focused ? require('../assets/notification-focused.png') : require('../assets/notification-outline.png');
//           } else if (rn === contact) {
//             IconSource = focused ? require('../assets/contact-focused.png') : require('../assets/contact-outline.png');
//           } else if (rn === settings) {
//             IconSource = focused ? require('../assets/settings-focused.png') : require('../assets/settings-outline.png');
//           }
//           return <Image source={IconSource} style={{ width: size, height: size, tintColor: color }} />;
//         },
//       })}
//     >
//       <Tab.Screen name={home} component={Home} />
//       <Tab.Screen name={customer} component={Customer} />
//       <Tab.Screen name={contact} component={Contact} />
//       <Tab.Screen name={notification} component={Notification} />
//       <Tab.Screen name={settings} component={Settings} />
//     </Tab.Navigator>
//   );
// };


// const styles = StyleSheet.create({
//   notificationBadge: {
//     position: 'absolute',
//     top: -2,
//     right: -15,
//     backgroundColor: '#ff0000',
//     borderRadius: 50,
//     width: 18,
//     height: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   notificationBadgeText: {
//     color: '#ffffff',
//     fontSize: 10,
//   },
// });

// export default BottomTabNavigator;
