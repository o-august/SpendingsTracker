import {Dimensions, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: "#aaaaaa",
      alignItems: 'center',
      justifyContent: 'center',
      //borderRadius: 20,
      width: Dimensions.get("window").width,
      padding: 30,
      flex: 1,
      
      
    },
    currencyStyle: {
      borderColor: "#111", 
      borderWidth: 1,
      paddingLeft: 45,
      paddingRight: 45,
      margin: 10,
      backgroundColor: "#aaaaaa",
      fontSize: 27,
      fontWeight: 'bold'
    }, 
    innerContainer: {
      backgroundColor: "#777777",
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get("window").width,
      padding: 10,
      margin: 10
    },
    textBox: {
      color : "rgba(137, 207, 240, 1)",
      fontSize: 22,
      fontWeight: 'bold'

    },
    navbar: {
      backgroundColor: '#444444',
    },

  });

