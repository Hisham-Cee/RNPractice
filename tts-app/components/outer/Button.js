import { Pressable, StyleSheet, Text } from "react-native";

function Button({text, onPress}){
    return(
        <Pressable style={styles.root} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};
export default Button;
const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#1297efff',
        padding: 10,
        borderRadius: 10
    },
    text:{
        fontSize: 18,
        color: '#fff'
    }
});