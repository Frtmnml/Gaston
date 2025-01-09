import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import HistoryScreen from './screens/HistoryScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route },) => ({
        tabBarStyle: { ...styles.tabContainer },
        tabBarShowLabel: true,
        tabBarIconStyle: { display: "none" },
        tabBarLabel: ({ focused }) => {
          let label;

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Add') {
            label = 'Add';
          } else if (route.name === 'History') {
            label = 'History';
          }

          return (
            <Text
              style={{
                ...styles.tabLabel,
                opacity: focused ? 1 : 0.4, // Highlight the label by adjusting opacity
              }}
            >
              {label}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#071A15',
    borderTopWidth: 0, // Removes the white line
    elevation: 0, // Removes shadow on Android
    shadowOpacity: 0, // Removes shadow on iOS
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FEDFB8',
  },
});

export default App;
