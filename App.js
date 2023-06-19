import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrencyInput from 'react-native-currency-input'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MyIconWithLabel from './components/icon-with-label';

const ICONS = [
  {
    label: 'entertain',
    iconType: 'google-controller',
  },
  {
    label: 'food',
    iconType: 'food',
  },
  {
    label: 'grocery',
    iconType: 'basket',
  },
  {
    label: 'retail',
    iconType: 'tshirt-crew',
  },
];

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Enter your spendings:</Text>
      <MoneyInput/>
      <DateInput/>
      <FlatList
        data={ICONS}
        renderItem={({item}) =>  <MyIconWithLabel label={item.label} iconType={item.iconType}/> }
        keyExtractor={item => item.label}
        numColumns={4}
      />



      <StatusBar style="auto" />
    </View>
  );
}

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
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };
  
    return (
      <>
        <Button title="Show Date Picker" onPress={showDatePicker} />
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
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
