import { Image, StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function MustVisitCard({path, city, place, amount, rating}){
    return(
        <View style={styles.rootContainer}>
            <Image source={path} style={styles.image}/>
            <View style={styles.subContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.cityText}>{city}</Text>
                    <Text style={styles.countryText}>{place}</Text>
                </View>
                <View style={styles.subContainer02}>
                    <Text style={styles.amountText}>{amount}</Text>
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={11} color='#dfa227ff' />
                        <Text style={styles.ratingText}>{rating}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default MustVisitCard;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        flexDirection: 'row',
        marginVertical: 7
    },
    image:{
        width: 55,
        height: 55,
        borderRadius: 30,
        marginRight: 10
    },
    textContainer:{
        
    },
    cityText:{
        color: '#000',
        fontSize: 15,
        
    },
    countryText:{
        color: '#6a6a6aff',
        fontSize: 12,
        fontWeight: 'condensed'
    },
    subContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    subContainer02:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    amountText:{
        fontSize: 13,
        fontWeight: '600',
    },
    ratingContainer:{
        flexDirection: 'row',  
        marginLeft: 25,
        alignItems: 'center'
    },
    ratingText:{
        fontSize: 10,
        fontWeight: 'condensed',
        marginLeft: 1
    }
});