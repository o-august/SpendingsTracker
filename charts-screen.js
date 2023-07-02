import { Text, View } from 'react-native';
import { styles } from "./components/styles"
import { getMonthTotalSync, getMonthTotal } from './components/database';
import * as React from 'react';

export function ChartsScreen() {
   
    const [ totalAmount, updateTotalAmount ] = React.useState("5")
   
    React.useEffect(() => {
        async function fetchData() {
            const res = await getMonthTotal();
            updateTotalAmount(res)
        }
        fetchData();
    },[])

    return (
      <View style={styles.container}>
        <Text>{totalAmount}</Text>
      </View>
    );
  }