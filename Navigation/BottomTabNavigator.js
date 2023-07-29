// import React, { useState, useEffect } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet, View, Text } from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Home from '../screens/Home';
// import Notification from '../screens/Notification';
// import News from '../screens/News';
// import Settings from '../screens/Settings';
// import Attendance from '../screens/Attendance';

// const Tab = createBottomTabNavigator();

// const home = "Home";
// const news = "News";
// const notification = "Notification";
// const attendance = "Attendance";
// const settings = "Settings";

// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName={home}
//       screenOptions={({ route }) => ({
//         headerShown: false,
//         tabBarStyle: {
//           display: "flex",
//         },
//         tabBarActiveTintColor: "#191970",
//         tabBarInactiveTintColor: "gray",
//         tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
//         tabBarStyle: { padding: 10, height: 70 },
//         tabBarIcon: ({ focused, color, size }) => {
//           let IconName;
//           let rn = route.name;
//           if (rn === home) {
//             IconName = focused ? "home" : "home-outline";
//           } else if (rn === news) {
//             IconName = focused ? "newspaper" : "newspaper-outline";
//           } else if (rn === notification) {
//             IconName = focused ? "notifications" : "notifications-outline";
//             return (
//               <View>
//                 <Ionicons name={IconName} size={size} color={color} />
//                 <View style={styles.notificationBadge}>
//                   <Text style={styles.notificationBadgeText}>1</Text>
//                 </View>
//               </View>
//             );
//           } else if (rn === attendance) {
//             IconName = focused ? "calendar" : "calendar-outline";
//           } else if (rn === settings) {
//             IconName = focused ? "settings" : "settings-outline";
//           }
//           return <Ionicons name={IconName} size={size} color={color} />;
//         },
//       })}
//     >
//       <Tab.Screen name={home} component={Home} />
//       <Tab.Screen name={news} component={News} />
//       <Tab.Screen name={notification} component={Notification} />
//       <Tab.Screen name={attendance} component={Attendance} />
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
