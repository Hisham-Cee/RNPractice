import { Pressable, StyleSheet, Text, View } from "react-native";

function Card({children}){
    return(
        <View style={styles.rootContainer}>
            <Text style={styles.nameText}>{children}</Text>
            <Text style={styles.numText}>1234567789</Text>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Call</Text>
            </Pressable>
        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    rootContainer:{
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10
    },
    nameText:{
        fontSize: 12,
        marginBottom: 10,
    },
    numText:{
        fontSize: 12,
        color: 'green',
        marginBottom: 10,
    },
    button:{
        width: 50,
        height: 30,
        borderRadius: 3,
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color: '#fff',
        fontSize: 12,
    }
});