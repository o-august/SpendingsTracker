import AsyncStorage from '@react-native-async-storage/async-storage';

export const addSpending = async (money, date, category) => {
  const newSpending = { "money": money, "date": date, "category": category }
  var allSpendings = await AsyncStorage.getItem('@spendings')
  allSpendings = allSpendings != null ? JSON.parse(allSpendings) : []
  allSpendings.push(newSpending)
  const jsonValue = JSON.stringify(allSpendings)
  await AsyncStorage.setItem('@spendings', jsonValue);
};

export const getMonthTotal = async () => {
    const jsonValue = await AsyncStorage.getItem('@spendings');
    console.log(jsonValue)
    return processMonthlyTotalFromJSON(jsonValue)
};

function processMonthlyTotalFromJSON(json) {
  const data = JSON.parse(json);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  let totalSum = 0.0;

  data.forEach(item => {
    const date = new Date(item.date);
    const itemMonth = date.getMonth();
    const itemYear = date.getFullYear();

    if ( itemMonth === currentMonth && itemYear === currentYear) {
      totalSum += parseFloat(item.money);
    }
  });
  return totalSum.toFixed(2)
}
