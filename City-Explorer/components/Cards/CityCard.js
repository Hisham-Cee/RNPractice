import { Image, StyleSheet, View, Text } from "react-native";

function CityCard({path, city, country}){
    return(
        <View style={styles.rootContainer}>
            <Image source={path} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.cityText}>{city}</Text>
                <Text style={styles.countryText}>{country}</Text>
            </View>
        </View>
    );
};
export default CityCard;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        marginRight: 14,
        marginTop: 5
    },
    image:{
        width: 55,
        height: 55,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        marginBottom: 7
    },
    textContainer:{
        justifyContent:'center',
        alignItems: 'center'
    },
    cityText:{
        color: '#fff',
        fontSize: 12,
        fontWeight: '300'
    },
    countryText:{
        color: '#b3b3b4ff',
        fontSize: 11,
        fontWeight: '300'
    }
});