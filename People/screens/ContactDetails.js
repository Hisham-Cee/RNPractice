import { Image, StyleSheet, Text, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function ContactDetails({route}){
    const {person,phone, path} = route.params;
    return (
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Ionicons name="arrow-back" size={24} color="black" />
                <View style={styles.headerSubContainer}>
                    <Ionicons name="pencil" size={24} color="black" />
                    <Ionicons name="star-outline" size={24} color="black" />
                    <Ionicons name="settings-outline" size={24} color="black" />
                </View>
            </View>
            <View style={styles.container}>
                <Image source={path} style={styles.image}/>
                <Text style={styles.nameText}>{person}</Text>
            </View>
            <View style={styles.subContainer1}>
                <View style={styles.buttonContainer}>
                    <View style={styles.icon}>
                        <Ionicons name="call" size={24} color="black" />
                    </View>
                    <Text style={styles.iconText}>Call</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.icon}>
                        <Ionicons name="chatbubble-sharp" size={24} color="black" />
                    </View>
                    <Text style={styles.iconText}>Message</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.icon}>
                        <Ionicons name="videocam" size={24} color="black" />
                    </View>
                    <Text style={styles.iconText}>Video</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <View style={styles.icon}>
                        <Ionicons name="location" size={24} color="black" />
                    </View>
                    <Text style={styles.iconText}>Location</Text>
                </View>
            </View>
            <View style={styles.subContainer2}>
                <Text style={styles.contactInfo}>Contact Info</Text>
                <View style={styles.subContainer21}>
                    <View style={styles.subContainer22}>
                    <Ionicons name="call" size={24} color="black" style={styles.callIcon}/>
                    <View >
                        <Text>{phone}</Text>
                        <Text>Phone . Default</Text>
                    </View>
                    </View>
                    <Ionicons name="chatbubble-sharp" size={24} color="black" />
                </View>
            </View>
            <View style={styles.subContainer2}>
                <Text>Contact Settings</Text>
                <View style={styles.subContainer23}>
                    <Ionicons name="musical-note" size={24} color="black" />
                    <Text style={{fontSize: 15}}>Ringtone</Text>
                </View>
                <View style={styles.subContainer23}>
                    <Ionicons name="share-social" size={24} color="black" />
                    <Text style={{fontSize: 15}}>Share Contact</Text>
                </View>
                <View style={styles.subContainer23}>
                    <Ionicons name="ban" size={24} color='#bb1515ff' />
                    <Text style={{fontSize: 15, color:'#bb1515ff'}}>Block Number</Text>
                </View>
                <View style={styles.subContainer23}>
                    <Ionicons name="trash" size={24} color='#bb1515ff'/>
                    <Text style={{fontSize: 15, color: '#bb1515ff'}}>Delete</Text>
                </View>
            </View>
        </View>
    );
};

export default ContactDetails;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 25,
    },
    headerContainer:{
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    headerSubContainer:{
        flexDirection: 'row',
        gap: 15
    },
    container:{
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    image:{
        borderRadius: 200, 
        width: 150,
        height: 150,
        marginTop: 35,
        marginBottom: 15
    },
    nameText:{
        fontSize: 30,
        marginBottom: 20
    },
    subContainer1:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonContainer:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        backgroundColor: '#dadadaff',
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 7
    },
    iconText:{},
    subContainer2:{
        backgroundColor: '#dadadaff',
        marginTop: 30,
        padding: 10,
        borderRadius: 10
    },
    contactInfo:{
        marginBottom: 10
    },
    subContainer21:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    callIcon:{},
    subContainer22:{
        flexDirection: 'row',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subContainer23:{
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 5,
        gap: 15,
        marginBottom: 10
    }
});