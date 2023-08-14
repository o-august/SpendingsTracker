import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import Icon from "@expo/vector-icons";
//import { IconButton } from "@react-native-material/core";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const MyIconWithLabel = (props2) => {
  const {label,iconType,onSubmit} = props2
  function onSubmitWrapper() {
    onSubmit(label)
  }
  return (
<View style={styles.container}>
    <IconButton onPress={onSubmitWrapper} icon={props => <Icon name={iconType} size={40} style={{ borderRadius:10, 

  borderWidth: 2,
  borderColor: "#333333",
  color: "#333333",
  backgroundColor: "#bbbbbb",
  overflow: "hidden"
}} {...props} />} />
<Text style={{ marginTop: 0, color: "#333333" }}>{label}</Text>
  </View>

  );
};
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    label: {
      marginTop: 8,
      fontSize: 12,
    },
  });
export default MyIconWithLabel;
