import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ImageAttachment from "../components/ImageAttachments";
import PdfAttachment from "../components/PdfAttachment";


function HomeScreen({navigation}){

    return (
        <>
        <StatusBar style="light" />
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>New Document</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.subHeading}>Attachments</Text>
                <View style={styles.buttonsContainer}>
                    <Pressable style={styles.button}>
                        <Ionicons name="camera" size={26} color="white" />
                        <Text style={styles.buttonText}>Camera</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Ionicons name="images" size={24} color="white" />
                        <Text style={styles.buttonText}>Gallery</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Ionicons name="document" size={24} color="white" />
                        <Text style={styles.buttonText}>PDF</Text>
                    </Pressable>
                </View>
                <View style={styles.attachmentContainer}>
                    <Text style={styles.containerHeading}>Selected Images</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                       <ImageAttachment path={require('../assets/images/img1.png')} onPress={()=>navigation.navigate('ImageDisplay')}/>
                       <ImageAttachment path={require('../assets/images/img1.png')} onPress={()=>navigation.navigate('ImageDisplay')}/>
                       <ImageAttachment path={require('../assets/images/img1.png')} onPress={()=>navigation.navigate('ImageDisplay')}/>
                       <ImageAttachment path={require('../assets/images/img1.png')} onPress={()=>navigation.navigate('ImageDisplay')}/>
                    </ScrollView>
                </View>
                <View style={styles.attachmentContainer}>
                    <Text style={styles.containerHeading}>Selected Documents</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                       <PdfAttachment onPress={()=> navigation.navigate('PdfDisplay')}/>
                       <PdfAttachment onPress={()=> navigation.navigate('PdfDisplay')}/>
                       <PdfAttachment onPress={()=> navigation.navigate('PdfDisplay')}/>
                       <PdfAttachment onPress={()=> navigation.navigate('PdfDisplay')}/>
                    </ScrollView>
                </View>
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
    headerContainer:{
        width: '100%',
        height: 100,
        backgroundColor: '#1160e7ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        fontSize: 22,
        color: '#fff',
        marginTop: 12
    },
    container:{
        padding: 20,
        
    },
    subHeading:{
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
        color: '#3c3c3cff'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '32%',
        height: 70,
        borderRadius: 10,
        backgroundColor: '#1160e7ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        marginTop: 3
    },
    attachmentContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 5,
        padding: 10,
        maxHeight: 300,
    },
    containerHeading: {
        color: '#515152ff',
        marginVertical: 15,
        fontSize: 18,
        textAlign: 'center',
    },

});