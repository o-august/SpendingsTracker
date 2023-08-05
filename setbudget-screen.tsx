
import { styles } from "./components/styles";
import CurrencyInput from "react-native-currency-input";
import React from "react";
import { View, Text, Button } from "react-native";



export function SetBudgetScreen() {
   
    const [moneyValue, setMoneyValue] = React.useState(0);

    return (
      <View style={styles.container}>
        <Text>Set Budget</Text>
        <MoneyInput value={moneyValue} setValue={setMoneyValue}/>
        <Button title="Confirm"></Button>
      </View>
    );
  }

  function MoneyInput({value,setValue}) {
    return <>
        <CurrencyInput prefix="$" separator="." delimiter="," value={value} onChangeValue={setValue} style={styles.currencyStyle} />
    </>;
}