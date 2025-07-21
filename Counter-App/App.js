import { Pressable, View, Text, StyleSheet } from "react-native";
import { useState } from "react";

export default function Counter(){

  const [count, setCount] = useState(0);

  function decrementHandler(){
    setCount(count-1);
  }

  function incrementHandler(){
    setCount(count+1);
  }
  return(
    <View style={styles.rootContainer}>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={decrementHandler}>
          <Text style={styles.buttonText}>Decrement</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={incrementHandler}>
          <Text style={styles.buttonText}>Increment</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    justifyContent:'flex-start',
    alignItems: 'center',
    paddingVertical: 80,
    backgroundColor: '#eae5e5ff'
  },
  counter:{
    fontSize: 56,
  },
  buttonContainer:{
    flexDirection: 'row',
    gap: 50,
    paddingTop: 50
  },
  button:{
    backgroundColor: '#fff',
    width: 120,
    height: 40,
    justifyContent:'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 18,
   
  }
});