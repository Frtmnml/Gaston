import { Image, StyleSheet } from 'react-native';
import { HeaderStack } from './components/HeaderStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import HistoryScreen from './screens/HistoryScreen';

import { COLORS } from './theme/theme';

const Tab = createBottomTabNavigator();



function App() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { ...styles.tabContainer },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'AddScreen') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'HistoryScreen') {
            iconName = focused ? 'document' : 'document-outline';
          }

          return (
            <Ionicons
              style={styles.tabIcon}
              name={iconName}
              size={focused ? 28 : 22}
              color={focused ? '#DA9F53' : 'gray'}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTitle: (props) => <HeaderStack {...props} />,
      }}/>
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    bottom: 15,
    width: '90%',
    height: 70,
    backgroundColor: COLORS.card,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around', // Space icons evenly across the container
    alignItems: 'center', // Vertically center items in the container
    alignContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: '5%',
  },
  tabIcon: {
    bottom: 15,
    justifyContent: 'center', // Center the icon
    alignItems: 'center', // Align icon vertically
  },
});


export default App;
