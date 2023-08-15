import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import Icon from "@expo/vector-icons";
//import { IconButton } from "@react-native-material/core";
import { Stack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from "../components/styles"

const MyIconWithLabel = (props2) => {
  const {label,iconType,onSubmit} = props2
  function onSubmitWrapper() {
    onSubmit(label)
  }
  return (
<View style={styles.iconsContainer}>
    <IconButton onPress={onSubmitWrapper} 
    style={styles.iconButton}
    aria-label='dasdasd'
    icon={props => {
      props.size=40
      props.color="#333333" 
      return <Icon name={iconType}  {...props}/>}} 
    />
    <Text style={styles.iconTextStyle}>{label}</Text>
  </View>

  );
};
export default MyIconWithLabel;