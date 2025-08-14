import { StyleSheet, View } from "react-native";
import Label from "../inner/Label";
import InputBox from "../inner/InputBox";
import Button from "./Button";

function Container({label1, placeholder1, label2, placeholder2, label3, placeholder3, text, value1, onChangeText1,value2,onChangeText2,value3,onChangeText3, onPress}){
  
    return(
        <View style={styles.root}>
            <Label label={label1}/>
            <InputBox placeholder={placeholder1} value={value1} onChangeText={onChangeText1}/>
            <Label label={label2}/>
            <InputBox placeholder={placeholder2} value={value2} onChangeText={onChangeText2}/>
            <Label label={label3}/>
            <InputBox placeholder={placeholder3} value={value3} onChangeText={onChangeText3}/>
            <Button text={text} onPress={onPress}/>
        </View>
    );
};
export default Container;
const styles = StyleSheet.create({
    root:{
        marginBottom: 20
    },
});