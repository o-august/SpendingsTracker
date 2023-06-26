import { Text, View } from 'react-native';
import { styles } from "./components/styles"
import { getMonthTotalSync } from './components/database';

export function ChartsScreen() {
    return (
      <View style={styles.container}>
        <Text>{getMonthTotalSync()}</Text>
      </View>
    );
  }