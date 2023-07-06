import { Text, View, Dimensions } from 'react-native';
import { styles } from "./components/styles"
import {  getMonthTotal, getDataToBarChartData } from './components/database';
import * as React from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

export function ChartsScreen() {

  const [totalAmount, updateTotalAmount] = React.useState("5")
  const [barChartData, updateBarChartData] = React.useState({labels:[],datasets:[{
    data: []
  }]})
  React.useEffect(() => {
    async function fetchData() {
      const monthTotal = await getMonthTotal();
      updateTotalAmount(monthTotal)
      const barChartData = await getDataToBarChartData();
      updateBarChartData(barChartData)
    }
    fetchData();
  }, [])

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      <Text>{totalAmount}</Text>
      <BarChart
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
        data={barChartData}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
}