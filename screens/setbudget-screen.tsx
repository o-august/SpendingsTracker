
import { styles } from "../components/styles";
import CurrencyInput from "react-native-currency-input";
import React from "react";
import { View, Text, Button, Alert } from "react-native";
import * as database from "../components/database"


export const SetBudgetScreen = (props) => {

  const [moneyValue, setMoneyValue] = React.useState(0);

  function setBudgetEvent() {
    database.setBudget(moneyValue)
    alert(`$${moneyValue.toFixed(2)} has been set as your monthly limit`);
    Alert.alert('Confirm',`$${moneyValue.toFixed(2)} has been set as your monthly limit`,[
      {
        text: 'OK',
        onPress: () => props.navigation.navigate('Summary'),
        style: 'cancel'
      }
    ]);

  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textBox}>Set Budget</Text>
        <MoneyInput value={moneyValue} setValue={setMoneyValue} onSubmit={setBudgetEvent}/>
        <Button title="Confirm" onPress={setBudgetEvent}></Button>
      </View>
    </View>
  );
}



function MoneyInput({ value, setValue, onSubmit }) {
  return <>
  <CurrencyInput prefix="$" separator="." delimiter="," 
    value={value} 
    onChangeValue={setValue} 
    style={styles.currencyStyle} 
    onSubmitEditing= {onSubmit}
    />
  </>;
}

