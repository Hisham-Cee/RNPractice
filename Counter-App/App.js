import { Pressable, View, Text, StyleSheet } from "react-native";


export default function Counter(){

  return(
    <View style={styles.rootContainer}>
      <Text style={styles.counter}></Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Decrement</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Increment</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer:{},
  counter:{},
  buttonContainer:{},
  button:{},
  buttonText:{}
});