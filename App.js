import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrencyInput from 'react-native-currency-input';


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Enter your spendings:</Text>
      <MoneyInput/>
      <StatusBar style="auto" />
    </View>
  );
}

function ChartsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Charts" component={ChartsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function MoneyInput() {
  const [value, setValue] = React.useState(0);

  function submit() {
    if(value) {
      console.log(value.toFixed(2))
    }
  }

  return <> 
  <CurrencyInput prefix="$" separator="." delimiter="," value={value} onChangeValue={setValue} />
  <Button title='submit' onPress={submit}></Button>
  </>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
