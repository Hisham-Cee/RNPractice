import { StyleSheet, TextInput, View } from "react-native";

function InputBox({placeholder, value, onChangeText}){
    return(
        <View style={styles.root}>
            <TextInput 
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};
export default InputBox;
const styles = StyleSheet.create({
    root:{
        
    },
    input:{
        borderWidth: 1,
        padding: 8,
        borderRadius: 10,
        width: '100%',
        height: 50,
        marginBottom: 10
    }
});