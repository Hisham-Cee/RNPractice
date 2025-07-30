import { StyleSheet, View, Text, Pressable } from "react-native";

function NameCard({docName}){
    return(
        <View style={styles.rootContainer}>
            <Pressable style={styles.subContainer}>
            <Text style={styles.text}>{docName}</Text>
            </Pressable>
        </View>
    );
};
export default NameCard;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        margin: 20,
        marginBottom: 50
    },
    subContainer:{
        backgroundColor: '#ebebedff',
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
    },
    text:{
        fontSize: 18,
        marginLeft: 15,
        color: '#4c4c53ff'
    }
});