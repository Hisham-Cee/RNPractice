import { StyleSheet, View , Text} from "react-native";
import { StatusBar } from 'expo-status-bar';

function PdfDisplay(){
    return (
        <>
        <StatusBar style="dark" />
        <View style={styles.rootContainer}>
            <Text style={styles.text}>Sorry! Can't view PDF in Expo Go :)</Text>
        </View>
        </>
    );
};
export default PdfDisplay;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#aaa'
    }
});