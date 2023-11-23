import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShoeBrandScreen from './ShoeBrandScreen';
import JordanScreen from './Jordan';
import AdidasScreen from './Adidas';
import ConverseScreen from './Converse';
import NewBalanceScreen from './NewBalance';
import NikeScreen from './Nike';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const iconMap = {
  Home: require('./assets/icons/home.png'),
  Adidas: require('./assets/icons/adidas.png'),
  Converse: require('./assets/icons/converse.png'),
  Jordan: require('./assets/icons/jordan.png'),
  NewBalance: require('./assets/icons/newbalance.png'),
  Nike: require('./assets/icons/nike.png'),
};


const getTabIcon = (name) => ({ focused, color, size }) => (
  <Image
    source={iconMap[name]}
    style={{ width: 20, height: 20, tintColor: focused ? color : 'gray' }}
  />
);

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#F5CCA0' }}>
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarActiveTintColor: '#6B240C',
      tabBarInactiveTintColor: '#994D1C',
      tabBarLabelStyle: {
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: '#F5CCA0',
      },
      tabBarIcon: ({ focused, color, size }) => {
        color: 'black';
      },
      headerStyle: {
        backgroundColor: '#F5CCA0',
      },
      headerTintColor: '#6B240C',
    })}>
      <Tab.Screen name="ShoeBrandsScreen" component={ShoeBrandScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: getTabIcon("Home"),
        }}
        />
      <Tab.Screen name="Adidas" component={AdidasScreen}
        options={{
          tabBarLabel: 'Adidas',
          tabBarIcon: getTabIcon("Adidas"),
        }}
        />
      <Tab.Screen name="Converse" component={ConverseScreen}
        options={{
          tabBarLabel: 'Converse',
          tabBarIcon: getTabIcon("Converse"),
        }}
        />
      <Tab.Screen name="Jordan" component={JordanScreen}
        options={{
          tabBarLabel: 'Jordan',
          tabBarIcon: getTabIcon("Jordan"),
        }}
        />
      <Tab.Screen name="NewBalance" component={NewBalanceScreen}
        options={{
          tabBarLabel: 'NewBalance',
          tabBarIcon: getTabIcon("NewBalance"),
        }}
        />
      <Tab.Screen name="Nike" component={NikeScreen}
        options={{
          tabBarLabel: 'Nike',
          tabBarIcon: getTabIcon("Nike"),
        }}
        />
    </Tab.Navigator>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    width: 150,
    height: 150,
    backgroundColor: '#6B240C',
    marginVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
});



export default function App() {
  return (
    <NavigationContainer>
      <MyTabs /> 
    </NavigationContainer>
  );
}
