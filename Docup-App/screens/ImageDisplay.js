import { Image, StyleSheet, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

function ImageDisplay({route}){
    const {uri} = route.params
    return (
        <>
        <StatusBar style="dark" />
        <View style={styles.rootContainer}>
            <Image source={{uri}} style={styles.img}  resizeMode="contain"/>
        </View>
        </>
    );
};
export default ImageDisplay;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1
    },
    img:{
        width: '100%',
        height: '100%',

    }
});