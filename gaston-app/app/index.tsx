import { StyleSheet, useColorScheme } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import HistoryScreen from './screens/HistoryScreen';


const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddScreen" component={AddScreen} />
      <Tab.Screen name="HistoryScreen" component={HistoryScreen} />
    </Tab.Navigator>
  );
}


const screenOptions = {
  tabBarStyle:{
    backgroundColor:'#0000ff',
    height:50,
  },
  tabBarItemStyle:{
    backgroundColor:'#00ff00',
    margin:5,
    borderRadius:10,
  }
};


export default App;