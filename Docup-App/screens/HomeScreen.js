import { Pressable, ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ImageAttachment from "../components/ImageAttachments";
import PdfAttachment from "../components/PdfAttachment";
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { useState } from "react";
import * as FileSystem from 'expo-file-system';

function HomeScreen({navigation}){

    const [imageAttachments, setImageAttachments] = useState([]);
    const [pdfAttachments, setPdfAttachments] = useState([]);

    const openCamera = async () => {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Permission required", "Camera access is needed");
        return;
        }
        const result = await ImagePicker.launchCameraAsync({ quality: 0.5 });
        console.log("Camera result:", result);
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImageAttachments(prev => [...prev, { uri: result.assets[0].uri }]);
        }
    };

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.5 });
        console.log("Image result:", result);
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setImageAttachments(prev => [...prev, { uri: result.assets[0].uri }]);
        }
    };

    const pickPdf = async () => {
    const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf', copyToCacheDirectory: true });
    console.log("PDF result:", result);

    if (!result.canceled && result.assets && result.assets.length > 0) {
        const asset = result.assets[0];
        setPdfAttachments(prev => [...prev, { uri: asset.uri }]);
    }
};


    const handleImagePress = (uri) => {
        navigation.navigate("ImageDisplay", { uri });
    };

    const handlePdfPress = (uri) => {
    navigation.navigate("PdfDisplay", { uri});
    };

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
                    <Pressable style={styles.button} onPress={openCamera}>
                        <Ionicons name="camera" size={26} color="white" />
                        <Text style={styles.buttonText}>Camera</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={pickImage}>
                        <Ionicons name="images" size={24} color="white" />
                        <Text style={styles.buttonText}>Gallery</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={pickPdf}>
                        <Ionicons name="document" size={24} color="white" />
                        <Text style={styles.buttonText}>PDF</Text>
                    </Pressable>
                </View>
                <View style={styles.attachmentContainer}>
                    <Text style={styles.containerHeading}>Selected Images</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                       {imageAttachments.map((item, index) => (
                                <ImageAttachment
                                    key={index}
                                    uri={ item.uri }
                                    onPress={() => handleImagePress(item.uri)}
                                />
                            ))}
                    </ScrollView>
                </View>
                <View style={styles.attachmentContainer}>
                    <Text style={styles.containerHeading}>Selected Documents</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                       {pdfAttachments.map((item, index) => (
                                <PdfAttachment
                                    key={index}
                                    onPress={() => handlePdfPress(item.uri)}
                                />
                            ))}
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