import { StyleSheet, Text, View } from "react-native";

function Heading({label}){
    return(
        <View style={styles.root}>
            <Text style={styles.text}>{label}</Text>
        </View>
    );
};
export default Heading;
const styles = StyleSheet.create({
    root:{
        marginBottom: 5
    },
    text:{
        marginTop: 15,
        fontSize: 30,
        alignSelf: 'center'
    }
});