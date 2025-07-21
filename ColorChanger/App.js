import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


export default function App(){
  const [color, setColor] = useState('red');

  function colorHandler(color){
    setColor(color)
  };

  return(
    <View style={styles.rootContainer}>
      <View style={styles.displayContainer}>
        <Text style={styles.colorDisplay}>Selected Color</Text>
        <View style={styles.textnDisplay}>
        <View style={[styles.displayView, {backgroundColor: color}]}>
        </View>
      <Text style={styles.displayText}>
        {color ? color.charAt(0).toUpperCase() + color.slice(1) : ''}
      </Text>
      </View>
      </View>
      <View style={styles.colorContainer}>
        <Pressable style={styles.colorChanger} onPress={() => colorHandler('green')}>
          <View style={styles.green}></View>
            <Text style={styles.colorText}>Green</Text>
        </Pressable>
        <Pressable style={styles.colorChanger} onPress={() => colorHandler('yellow')}>
          <View style={styles.yellow}></View>
            <Text style={styles.colorText}>Yellow</Text>  
        </Pressable>
        </View>
        <View style={styles.colorContainer}>
        <Pressable style={styles.colorChanger} onPress={() => colorHandler('orange')}>
          <View style={styles.orange}></View>
            <Text style={styles.colorText}>Orange</Text> 
        </Pressable>
        <Pressable style={styles.colorChanger} onPress={() => colorHandler('blue')}>
          <View style={styles.blue}></View>
            <Text style={styles.colorText}>Blue</Text> 
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer:{
    flex: 1,
    padding: 30,
    backgroundColor: '#cac9c9ff'
  },
  displayContainer:{
    flexDirection:'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  colorDisplay:{
    fontSize: 18,
    paddingRight: 10,
    marginBottom: 25
  },
  displayView:{
    width: 140,
    height: 70,
  },
  displayText:{
    fontSize: 15,
    marginTop: 10
  },
  textnDisplay:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorContainer:{
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around'
  },
  colorChanger:{},
  green:{
    width: 140,
    height : 70,
    backgroundColor: 'green'
  },
  yellow:{
    width: 140,
    height : 70,
    backgroundColor: 'yellow'
  },
  orange:{
    width: 140,
    height : 70,
    backgroundColor: 'orange'
  },
  blue:{
    width: 140,
    height : 70,
    backgroundColor: 'blue'
  },
  colorText:{
    textAlign:'center',
    paddingTop: 5
  }
});