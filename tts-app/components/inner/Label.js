import { StyleSheet, Text, View } from "react-native";

function Label({label}){
    return(
        <View style={styles.root}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};
export default Label;
const styles = StyleSheet.create({
    root:{
        marginBottom: 5
    },
    text:{
        fontSize: 16,
        marginLeft: 5
    }
});