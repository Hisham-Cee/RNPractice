import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from '@expo/vector-icons';
import CityDetailsCard from "../components/Cards/CityDetailsCard";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MustVisit from "../components/DummyData/MustVisit";
import MustVisitCard from "../components/Cards/MustVisitCard";


function CityDetailsScreen({navigation}){
    return(
        <>
        <StatusBar style="light" />
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Pressable style={styles.iconButton} onPress={()=> navigation.navigate('Home')}>
                    <Ionicons name="arrow-back" size={20} color="black" />
                </Pressable>
                <Text style={styles.headingText}>City Details</Text>
                <View style={styles.iconButton}>
                    <Ionicons name="share-social-outline" size={20} color="black"/>
                </View>
            </View>
            <CityDetailsCard 
                path={require('../assets/images/Bangkok2.png')}
                city={'Bangkok'}
                country={'Thailand'}
                description={'Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life. The boat-filled Chao Phraya River feeds its network of canals, flowing past the Rattanakosin royal district, home to opulent Grand Palace and its sacred Wat Phra Kaew Temple. Nearby is Wat Pho Temple with an enormous reclining Buddha and, on the opposite shore, Wat Arun Temple with its steep steps and Khmer-style spire.  '}
                population={'8,305k+'}
                language={'Thai/Siamese'}
                currency={'Thai Baht'}
            />
            <View style={styles.container}>
                <Text style={styles.containerHeading}>Things to do</Text>
                <View style={styles.end1}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.scrollIconContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="yoga" size={28} color="#fff" />
                        </View>
                        <Text style={styles.iconText}>Yoga</Text>
                    </View>
                    <View style={styles.scrollIconContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="parachute" size={28} color="#fff" />
                        </View>
                        <Text style={styles.iconText}>Parachute</Text>
                    </View>
                    <View style={styles.scrollIconContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="skateboarding" size={28} color="#fff" />
                        </View>
                        <Text style={styles.iconText}>Ice Skate</Text>
                    </View>
                    <View style={styles.scrollIconContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="football-helmet" size={32} color="#fff" />
                        </View>
                        <Text style={styles.iconText}>Ball Paint</Text>
                    </View>
                    <View style={styles.scrollIconContainer}>
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons name="run" size={28} color="#fff" />
                        </View>
                        <Text style={styles.iconText}>Jogging</Text>
                    </View>
                </ScrollView>
                </View>
                <Text style={styles.containerHeading}>Must Visit</Text>
                <View style={styles.end}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {MustVisit.map((destination)=> (
                        <Pressable key={destination.id}>
                            <MustVisitCard 
                                path={destination.path}
                                city={destination.city}
                                place={destination.place}
                                amount={destination.amount}
                                rating={destination.rating}
                            />
                        </Pressable>
                    ))}
                </ScrollView>
                </View>
            </View>
        </View>
        </>
    );
};
export default CityDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#3E67F3',
        padding: 14
    },
    headerContainer:{
        flexDirection: 'row',
        paddingTop: 40,
        paddingBottom: 25,
        paddingHorizontal: 5,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headingText:{
        fontSize: 17,
        color: '#fff'
    },
    iconButton:{
        backgroundColor: '#fff',
        borderRadius: 20,
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 11,
        borderRadius: 25,
        padding: 20
    },
    containerHeading:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 15
    },
    scrollIconContainer:{
        alignItems: 'center',
        marginRight: 15
    },
    iconContainer:{
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText:{
        fontSize: 11,
        fontWeight: '600',
        marginTop: 5,
        color: '#2b2b2cff'
    },
    end1:{
        flex: 1
    },
    end:{
        flex: 2
    }
});