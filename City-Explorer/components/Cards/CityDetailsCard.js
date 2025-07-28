import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";

function CityDetailsCard({path, city, country, description, population, language, currency}){
    const [expanded, setExpanded] = useState(false);
    return(
        <View style={styles.wrapper}>
            <View style={styles.imageWrapper}>
                <Image source={path} style={styles.image}/>
            </View>
            <View style={styles.rootContainer}>
                <View style={styles.headerContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.cityText}>{city}</Text>
                        <Text style={styles.countryText}>{country}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={styles.locationContainer}>
                            <Ionicons name="location-sharp" size={20} color="black" />
                        </View>
                        <View  style={styles.favoritesContainer}>
                            <Ionicons name="heart" size={20} color="white" />
                            <Text style={styles.favoritesText}>Saved</Text>
                        </View>
                    </View>
                </View>
                <Text 
                    style={styles.descriptionText}
                    numberOfLines={expanded ? undefined : 2}
                >
                    {description}
                </Text>
                <Pressable onPress={() => setExpanded(!expanded)}>
                    <Text style={styles.readMoreText}>
                        {expanded ? 'Read less' : 'Read more'}
                    </Text>
                </Pressable>
                <View style={styles.divider} />
                <View style={styles.subConatiner}>
                    <View>
                        <Text style={styles.upperText}>{population}</Text>
                        <Text style={styles.lowerText}>Population</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View>
                        <Text style={styles.upperText}>{language}</Text>
                        <Text style={styles.lowerText}>Language</Text>
                    </View>
                    <View style={styles.verticalDivider} />
                    <View>
                        <Text style={styles.upperText}>{currency}</Text>
                        <Text style={styles.lowerText}>Currency</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};
export default CityDetailsCard;

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
    },
    imageWrapper: {
        position: 'absolute',
        top: -5,
        zIndex: 10,
        backgroundColor: '#fff',
        borderRadius: 50,
        padding: 3,
        marginLeft: 12
    },
   image:{
        width: 65,
        height: 65,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff'
    },
    rootContainer:{
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 18,
        width: '100%',
        paddingTop: 40,
        paddingBottom: 20,
        marginTop: 30, 
    },
    headerContainer:{
        flexDirection: 'row',
        marginTop: 5,
        alignItems:'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    nameContainer:{},
    cityText:{
        fontSize: 23,
        letterSpacing: 1
    },
    countryText:{
        color: '#aaa',
        fontSize: 13
    },
    iconContainer:{
        flexDirection: 'row'
    },
    locationContainer:{
        width: 35,
        height: 35,
        borderRadius: 30,
        backgroundColor: '#f1c71eff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    favoritesContainer:{
        flexDirection: 'row',
        width: 85,
        height: 35,
        borderRadius: 30,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    favoritesText:{
        color:'#fff',
        marginLeft: 3,
        fontSize: 13,
    },
    descriptionText:{
        color: '#a9a8a5ff',
        fontSize: 12,
    },
    readMoreText: {
        color: '#212122ff',
        fontWeight: '500',
        marginBottom: 10
    },
    divider: {
        height: 1,
        backgroundColor: '#dfddd6ff', 
        width: '100%',
    },
    subConatiner:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    upperText:{},
    lowerText:{
        color: '#a9a8a5ff',
        fontSize: 11,
    },
    verticalDivider: {
        width: 1,
        height: 15,
        backgroundColor: '#e4e3ddff',
        marginHorizontal: 10,
    },
});