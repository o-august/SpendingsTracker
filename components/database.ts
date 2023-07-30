import AsyncStorage from '@react-native-async-storage/async-storage';

export const addSpending = async (money, date, category) => {
  const newSpending = { "money": money, "date": date, "category": category }
  var allSpendings = await AsyncStorage.getItem('@spendings')
  const allSpendingsJson = allSpendings != null ? JSON.parse(allSpendings) : []
  allSpendingsJson.push(newSpending)
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

    if (itemMonth === currentMonth && itemYear === currentYear) {
      totalSum += parseFloat(item.money);
    }
  });
  return totalSum.toFixed(2)
}

export const getDataToBarChartData = async () => {
  const jsonValue = await AsyncStorage.getItem('@spendings');
  return convertDataToBarChartData(jsonValue)
};

function convertDataToBarChartData(json) {
  // Parse the input JSON into an array of objects
  const inputData = JSON.parse(json);

  // Create an array to store the sums for each month
  const monthlySums = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  // Iterate over the input data and calculate the sums for each month
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  inputData.forEach(item => {
    const date = new Date(item.date);
    const month = date.getMonth();
    const year = date.getFullYear();
    if (year === currentYear) {
      const money = parseFloat(item.money);
      monthlySums[month] += money;
    }
  });
  // Define the labels for each month
  const labels = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  // Create the output object
  const outputData = {
    labels: labels,
    datasets: [
      {
        data: monthlySums
      }
    ]
  };

  // Convert the output object to JSON
  const outputJSON = JSON.stringify(outputData);
  console.log(outputJSON);
  return outputData
}
const data = [
  {
    name: "Grocery",
    amount: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Retail",
    amount: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "fun",
    amount: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "food",
    amount: 450,
    color: "yellow",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
];
export const getDataToPieChartData = async () => {
  const jsonValue = await AsyncStorage.getItem('@spendings');
  return data
};