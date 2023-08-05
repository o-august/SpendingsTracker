import AsyncStorage from '@react-native-async-storage/async-storage';

export const addSpending = async (money: number, date: Date, category: string) => {
  const newSpending = { "money": money, "date": date, "category": category }
  var allSpendings = await AsyncStorage.getItem('@spendings') || "[]";
  var allSpendingsJson = []
  allSpendingsJson = allSpendingsJson.concat(JSON.parse(allSpendings))
  allSpendingsJson.push(newSpending)
  const jsonValue = JSON.stringify(allSpendingsJson)
  await AsyncStorage.setItem('@spendings', jsonValue);
};

export const getMonthTotal = async () => {
  const jsonValue = await AsyncStorage.getItem('@spendings');
  console.log(jsonValue)
  return processMonthlyTotalFromJSON(jsonValue)
};

function processMonthlyTotalFromJSON(json) {
  const data = JSON.parse(json) || [];

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
  const inputData = JSON.parse(json) || [];

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

function convertDataToPieChartData(inputData: [any]) {
  const categories = {};

  // Calculate total amount for each category
  inputData.forEach((item) => {
    const { category, money, date } = item;
    const dateObject = new Date(date);
    const currentDate = new Date();
    if (currentDate.getMonth() === dateObject.getMonth() && currentDate.getFullYear() === dateObject.getFullYear()) {
      if (categories[category]) {
        categories[category] += parseFloat(money);
      } else {
        categories[category] = parseFloat(money);
      }
    }
  });

  // Create the final array in the desired format
  const dataArray = Object.keys(categories).map((category) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    amount: categories[category],
    color: category === "fun" ? "red" : category === "food" ? "yellow" : category === "food" ? "yellow" : category === "grocery" ? "blue" : category === "retail" ? "green" : "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15,
  }));

  return dataArray;
}
export const getDataToPieChartData = async () => {
  const jsonValueAsString = await AsyncStorage.getItem('@spendings');
  const data = JSON.parse(jsonValueAsString) || [];
  return convertDataToPieChartData(data)
};
