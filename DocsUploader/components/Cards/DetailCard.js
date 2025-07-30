import { StyleSheet, View, Text, Pressable, Image } from "react-native";

function DetailsCard({docName, path}){
    return(
        <View style={styles.rootContainer}>
            <Pressable style={styles.subContainer}>
                <Image source={path} style={styles.image} />
                <View style={styles.txtContainer}>
                    <Text style={styles.text}>{docName}</Text>
                </View>
            </Pressable>
        </View>
    );
};
export default DetailsCard;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginHorizontal: 10,
        marginTop: 20
    },
    subContainer:{
        flex: 1,
        backgroundColor: '#fcf7f7ff',
        borderRadius: 10,
    },
    image:{
        width: '100%',
        height: 150,
        borderRadius: 10,
        marginBottom: 5
    },
    text:{
        fontSize: 14,
        marginLeft: 5,
        color: '#2a2a2aff'
    }
});