import AsyncStorage from '@react-native-async-storage/async-storage';

export const addSpending = async (money, date, category) => {
      const newSpending = {"money":money,"date":date,"category":category}
      var allSpendings = await AsyncStorage.getItem('@spendings')
      allSpendings != null ? JSON.parse(allSpendings) : []
      allSpendings.push(newSpending)
      const jsonValue = JSON.stringify(allSpendings)
      await AsyncStorage.setItem('@spendings', jsonValue);
  };


export function getMonthTotal(){
    return 99
}

