import { Linking, Pressable, StyleSheet, Text, View } from "react-native";


function Card({person, phone, onPress}){

    function callHandler(){
        let number = `tel:${phone}`;
        Linking.openURL(number);
    };
    return(
        <View style={styles.rootContainer}>
            <View style={styles.subContainer}>
                <View style={styles.align}>
                    <Pressable onPress={onPress} >
                        <Text style={styles.nameText}>{person}</Text>
                    
                    <Text style={styles.numText}>{phone}</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.button} onPress={callHandler}>
                    <Text style={styles.buttonText}>Call</Text>
                </Pressable>
            </View>
        </View>
    );
}
export default Card;

const styles = StyleSheet.create({
    rootContainer:{
        padding: 20,
        backgroundColor: '#dadadaff',
        borderRadius: 10,
        marginBottom: 10
    },
    nameText:{
        fontSize: 19,
    },
    align:{
        flexDirection:'column'
    },
    subContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    numText:{
        fontSize: 16,
        color: '#333',
        marginTop: 15
    },
    button:{
        width: 60,
        height: 35,
        borderRadius: 3,
        backgroundColor: 'black',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 15
    },
    buttonText:{
        color: '#fff',
        fontSize: 15,
    }
});