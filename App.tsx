import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrencyInput from 'react-native-currency-input'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MyIconWithLabel from './components/icon-with-label';
import { styles } from "./components/styles"
import { HomeScreen } from './screens/enter-amount';
import { ChartsScreen } from './screens/charts-screen';
import { SetBudgetScreen } from './screens/setbudget-screen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.navbar,
          tabBarActiveTintColor: "rgba(137, 207, 240, 1)",
          headerStyle: styles.navbar,
          headerTitleStyle: {
            color: "rgba(137, 207, 240, 1)",
          },
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Summary" component={ChartsScreen} options={{ unmountOnBlur: true }} />
        <Tab.Screen name="Set Budget" component={SetBudgetScreen} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}


