import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrencyInput from 'react-native-currency-input'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MyIconWithLabel from './components/icon-with-label';
import { styles } from "./components/styles"
import { HomeScreen } from './enter-amount';


function ChartsScreen() {
  return (
    <View style={styles.container}>
      <Text>Summary</Text>
    </View>
  );
}

function SetBudgetScreen() {
  return (
    <View style={styles.container}>
      <Text>Set Budget</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Summary" component={ChartsScreen} />
        <Tab.Screen name="Set Budget" component={SetBudgetScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


