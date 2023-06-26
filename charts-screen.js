import { Text, View } from 'react-native';
import { styles } from "./components/styles"
import { getMonthTotal } from './components/database';

export function ChartsScreen() {
    return (
      <View style={styles.container}>
        <Text>{getMonthTotal()}</Text>
      </View>
    );
  }