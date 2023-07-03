import { Text, View, Dimensions } from 'react-native';
import { styles } from "./components/styles"
import { getMonthTotalSync, getMonthTotal } from './components/database';
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

  React.useEffect(() => {
    async function fetchData() {
      const res = await getMonthTotal();
      updateTotalAmount(res)
    }
    fetchData();
  }, [])

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43]
      }
    ]
  };
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
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  );
}