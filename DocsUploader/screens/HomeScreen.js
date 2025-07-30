import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import NameCard from "../components/Cards/NameCard";
import { useNavigation } from '@react-navigation/native';

function HomeScreen(){
     const navigation = useNavigation();
    return(
        <>
        <StatusBar style="light"/>
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>Documents</Text>
                <Pressable style={styles.iconContainer} onPress={() => navigation.navigate('Add')}>
                    <Ionicons name="add-outline" size={38} color="white" />
                </Pressable>
            </View>
            <View style={styles.subContainer}>
                <NameCard docName={'Driving License'} />
                <NameCard docName={'Aadhar'} />
            </View>
        </View>
        </>
    );
};
export default HomeScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1
    },
    subContainer:{},
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1160e7ff',
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 10
    },
    headingText:{
        fontSize: 24,
        color: '#fff',
        marginLeft: 110
    },
    iconContainer:{
        backgroundColor: '#1160e7ff',
        width: 35,
        height: 35,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});