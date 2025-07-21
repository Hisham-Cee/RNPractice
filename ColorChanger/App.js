import { Pressable, Text, View } from "react-native";


export default function App(){
  return(
    <View>
      <Text>Selected Color</Text>
      <View>
        <Pressable>
          <View>
            <Text>Green</Text>
          </View>
        </Pressable>
        <Pressable>
          <View>
            <Text>Yellow</Text>
          </View>
        </Pressable>
        <Pressable>
          <View>
            <Text>Red</Text>
          </View>
        </Pressable>
        <Pressable>
          <View>
            <Text>Blue</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};