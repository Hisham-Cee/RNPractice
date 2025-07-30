import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";

function ImageDisplay({ route }){
    const { uri } = route.params;
    return(
        <>
        <StatusBar style="light"/>
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>Image</Text>
            </View>
            <View style={styles.container}>
                <Image source={{ uri }} style={styles.image} resizeMode="contain" />
            </View>
        </View>
        </>
    );
};
export default ImageDisplay;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1
    },
    headerContainer:{
        backgroundColor: '#1160e7ff',
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText:{
        fontSize: 22,
        color: '#fff',
    },
    subContainer:{
        padding: 20,
    },
      container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },

});