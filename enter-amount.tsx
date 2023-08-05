import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, FlatList } from 'react-native';
import * as React from 'react';
import CurrencyInput from 'react-native-currency-input'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MyIconWithLabel from './components/icon-with-label';
import  { styles } from "./components/styles"
import * as database from "./components/database"

const ICONS = [
    {
        label: 'fun',
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

export function HomeScreen() {
    const [moneyValue, setMoneyValue] = React.useState(0);
    const [dateValue, setDateValue] = React.useState(new Date());
    function addSpending(category) {
        console.log("log attempt")
        if (moneyValue) {
            alert(`$${moneyValue.toFixed(2)} spent on ${dateValue.toDateString()} on ${category} has been added`);
            database.addSpending(moneyValue.toFixed(2), dateValue, category)
        }
    }
    return (
        <View style={styles.container}>
            <Text>Enter your spendings:</Text>
            <MoneyInput value={moneyValue} setValue={setMoneyValue}/>
            <DateInput dateValue={dateValue} setDateValue={setDateValue}/>
            <FlatList
                data={ICONS}
                renderItem={({ item }) => <MyIconWithLabel label={item.label} iconType={item.iconType} onSubmit={addSpending}/>}
                keyExtractor={item => item.label}
                numColumns={4}
            />
            <StatusBar style="auto" />
        </View>
    );
}



function MoneyInput({value,setValue}) {
    return <>
        <CurrencyInput prefix="$" separator="." delimiter="," value={value} onChangeValue={setValue} style={styles.currencyStyle} />
    </>;
}
function DateInput({dateValue,setDateValue}) {
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        setDateValue(date)
        hideDatePicker();
    };

    return (
        <>
            <Button title={dateValue.toDateString()} onPress={showDatePicker} />
            <DateTimePickerModal
                date={dateValue}
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    );


}
