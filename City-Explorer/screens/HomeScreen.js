import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import CityCard from "../components/Cards/CityCard";
import City from "../components/DummyData/City";
import Destination from "../components/DummyData/Destination";
import DestinationCard from "../components/Cards/DestinationCard";


function HomeScreen(){
    
    return (
        <>
        <StatusBar style="light" />
        <View style={styles.rootContainer}>
            <Text style={styles.userText}>Hi, Vetrick!</Text>
            <Text style={styles.titleText}>Where do you</Text>
            <Text style={styles.titleText}>want to go?</Text>
            <Text style={styles.subText}>We filter out a best place for your next vacation</Text>
            <View style={styles.searchBar}>
                <Ionicons name="search" size={30} color="#000" style={styles.searchIcon}/>
                <TextInput placeholder="Search city..." />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {City.map((city)=> (
                    <Pressable
                        key={city.id}
                    >
                        <CityCard 
                            path={city.path}
                            city={city.city}
                            country={city.country}
                        />
                    </Pressable>
                ))}
            </ScrollView>
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomContainerHeading}>You might like!</Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {Destination.map((destination)=> (
                        <Pressable key={destination.id}>
                            <DestinationCard 
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
        </>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        backgroundColor: '#3E67F3',
        padding: 14
    },
    userText:{
        color: '#fff',
        fontWeight: '100',
        fontSize: 14,
        marginTop: 50,
        marginBottom: 5
    },
    titleText:{
        fontSize: 34,
        color: '#fff',
        
    },
    subText:{
        fontSize: 12,
        fontWeight: '300',
        color: '#d6d7daff',
        marginTop: 5,
        marginBottom: 5
    },
    searchBar:{
        flexDirection: 'row',
        backgroundColor:"#fff",
        marginVertical: 20,
        width: '100%',
        borderRadius: 25,
        height: 50
    },
    searchIcon:{
        paddingVertical: 10,
        paddingLeft: 10
    },
    bottomContainer:{
        flex: 3,
        borderRadius: 25,
        padding: 20,
        backgroundColor: '#fff'
    },
    bottomContainerHeading:{
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 15
    }
});