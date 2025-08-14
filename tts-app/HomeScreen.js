import { StyleSheet, Text, View } from "react-native";
import Container1 from "./components/outer/Container1";
import Container2 from "./components/outer/Container2";
import Heading from "./components/outer/Heading";

function HomeScreen(){
  return(
    <View style={styles.root}>
      <Heading label='Service'/>
      <Container1/>
      <Heading label='Contact Us'/>
      <Container2/>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  root:{
    flex: 1,
    padding: 20,
  },
  text:{
    marginTop: 15,
    fontSize: 30,
    alignSelf: 'center'
  }
});