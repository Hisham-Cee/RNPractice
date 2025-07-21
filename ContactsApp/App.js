import { StyleSheet, View, Text } from "react-native";
import Card from "./Card";

export default function App(){
  return(
    <View style={styles.rootContainer}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>Total contacts 6</Text>
      </View>
      <Card>Ziya</Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    padding: 30,
    paddingTop: 80,
    backgroundColor: '#cac9c9ff'
  },
  textContainer:{
    justifyContent: 'center',
   alignItems: 'center',
   marginBottom: 15
  },
  text:{
   fontSize: 16,
   color: '#424242ff'
  }
});