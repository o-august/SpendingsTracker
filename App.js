import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrencyInput from 'react-native-currency-input';
import DateTimePicker from '@react-native-community/datetimepicker';




function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Enter your spendings:</Text>
      <MoneyInput/>
      <DateInput/>
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
  <CurrencyInput prefix="$" separator="." delimiter="," value={value} onChangeValue={setValue} style= {styles.currencyStyle}/>
  <Button title='submit' onPress={submit}></Button>
  </>;
}
function DateInput(){
  const [date, setDate] = React.useState(new Date(1598051730000));

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  currencyStyle: {
    borderColor: "#111", 
    borderWidth: 1,
    paddingLeft: 45,
    paddingRight: 45,
    margin: 10
  }
});
