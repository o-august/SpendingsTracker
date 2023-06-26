import AsyncStorage from '@react-native-async-storage/async-storage';

export const addSpending = async (money, date, category) => {
      const newSpending = {"money":money,"date":date,"category":category}
      var allSpendings = await AsyncStorage.getItem('@spendings')
      allSpendings = allSpendings != null ? JSON.parse(allSpendings) : []
      allSpendings.push(newSpending)
      const jsonValue = JSON.stringify(allSpendings)
      await AsyncStorage.setItem('@spendings', jsonValue);
  };

export const getMonthTotal = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('@spendings');
        console.log(jsonValue)
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
    }
  };
export function getMonthTotalSync(){
    (async () => {
        await getMonthTotal();
    })();
  }