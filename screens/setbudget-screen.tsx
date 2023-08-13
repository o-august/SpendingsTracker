
import { styles } from "../components/styles";
import CurrencyInput from "react-native-currency-input";
import React from "react";
import { View, Text, Button } from "react-native";
import * as database from "../components/database"


export function SetBudgetScreen() {

  const [moneyValue, setMoneyValue] = React.useState(0);

  function setBudgetEvent() {
    database.setBudget(moneyValue)
    alert(`$${moneyValue.toFixed(2)} has been set as your monthly limit`);

  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Set Budget</Text>
        <MoneyInput value={moneyValue} setValue={setMoneyValue} />
        <Button title="Confirm" onPress={setBudgetEvent}></Button>
      </View>
    </View>
  );
}



function MoneyInput({ value, setValue }) {
  return <>
    <CurrencyInput prefix="$" separator="." delimiter="," value={value} onChangeValue={setValue} style={styles.currencyStyle} />
  </>;
}

