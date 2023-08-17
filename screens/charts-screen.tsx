import { Text, View, Dimensions } from 'react-native';
import { styles } from "../components/styles"
import { getMonthTotal, getDataToBarChartData, getDataToPieChartData, getBudget } from '../components/database';
import * as React from 'react';
import {
  BarChart,
  PieChart,
} from "react-native-chart-kit";

export function ChartsScreen() {

  const [totalAmount, updateTotalAmount] = React.useState("0")
  const [remainingBudget, updateReaminingBudget] = React.useState(0)
  const [budget, updateBudget] = React.useState(0)

  const [barChartData, updateBarChartData] = React.useState({
    labels: [], datasets: [{
      data: []
    }]
  })
  const [pieChartData, updatePieChartData] = React.useState([])

  React.useEffect(() => {
    async function fetchData() {
      const monthTotal = await getMonthTotal();
      updateTotalAmount(monthTotal)
      const barChartData = await getDataToBarChartData();
      updateBarChartData(barChartData)
      const pieChartData = await getDataToPieChartData();
      updatePieChartData(pieChartData)
      const budget = await getBudget();
      updateBudget(budget);
      const remainingBudgetTemp = budget - parseFloat(monthTotal)
      updateReaminingBudget(remainingBudgetTemp)
    }
    fetchData();
  }, [])

  const chartConfig = {
    backgroundGradientFrom: "#777777",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#777777",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(137, 207, 240, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>

        <Text style={styles.textBox}>{"This months spendings:"}</Text>
        <Text style={styles.textBox}>{"$" + totalAmount}</Text>
        <Text style={styles.textBox}>{"$" + remainingBudget.toFixed(2)+" left from budget set to $"+budget}</Text>
      </View>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        data={barChartData}
        width={Dimensions.get("window").width}
        height={240}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        yAxisSuffix=''
      />
      <View style={styles.innerContainer}>

        <PieChart
          data={pieChartData}
          width={Dimensions.get("window").width}
          height={220}
          chartConfig={chartConfig}
          accessor={"amount"}
          backgroundColor={"transparent"}
          paddingLeft={"15"}
          absolute={false}
          hasLegend={true}
        />
        <Text style={styles.textBox}>This months category split</Text>
      </View>
    </View>
  );
}