import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, TextInput, Pressable, ScrollView, Image, Alert } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import FileViewer from 'react-native-file-viewer';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

function AddScreen() {
  const navigation = useNavigation();
  const [attachments, setAttachments] = useState([]);

  const openCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required", "Camera access is needed");
      return;
    }
    const result = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAttachments(prev => [...prev, { type: "image", uri: result.assets[0].uri }]);
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ quality: 0.5 });
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setAttachments(prev => [...prev, { type: "image", uri: result.assets[0].uri }]);
    }
  };

  const pickPdf = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      console.log("PDF result:", result);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const pickedPdf = result.assets[0];
        setAttachments((prev) => [
          ...prev,
          {
            type: "pdf",
            uri: pickedPdf.uri,
            name: pickedPdf.name || "Document",
          },
        ]);
      } else {
        console.log("PDF selection was cancelled or invalid");
      }
    } catch (err) {
      console.log("Error picking PDF:", err);
    }
  };

  const openPdf = async (uri) => {
    try {
      await FileViewer.open(uri, { showOpenWithDialog: true });
    } catch (error) {
      console.log("Error opening file:", error);
      Alert.alert("Unable to open PDF", "Try again with a different file.");
    }
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headingText}>Add New Document</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.name}>Document Name</Text>
          <TextInput style={styles.inputContainer} placeholder="Enter document name" />
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
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
              <View style={{ gap: 12 }}>
                {attachments.length === 0 ? (
                  <Text style={styles.containerText}>No Attachments Selected !</Text>
                ) : (
                  attachments.map((item, idx) =>
                    item.type === "image" ? (
                      <View key={idx} style={{ marginBottom: 15 }}>
                        <Text style={{ color: "#1160e7ff" }}>Image</Text>
                        <Pressable onPress={() => navigation.navigate('ImageDisplay', { uri: item.uri })}>
                          <Image source={{ uri: item.uri }} style={{ width: 220, height: 220, borderRadius: 8 }} />
                        </Pressable>
                      </View>
                    ) : (
                      <View key={idx} style={{ marginBottom: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eef', width: 220, height: 220 }}>
                        <Text style={{ color: "#1160e7ff" }}>PDF: {item.name || "Document"}</Text>
                        <Pressable onPress={() => openPdf(item.uri)}>
                          <Ionicons name="document" size={50} color="#1160e7ff" />
                        </Pressable>
                      </View>
                    )
                  )
                )}
              </View>
            </ScrollView>
          </View>
          <Pressable style={styles.footerButton}>
            <Text style={styles.footerBtnTxt}>Create</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

export default AddScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  headerContainer: {
    backgroundColor: '#1160e7ff',
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingText: {
    fontSize: 22,
    color: '#fff',
  },
  subContainer: {
    padding: 20,
  },
  name: {
    fontSize: 14,
    marginLeft: 3,
    marginBottom: 5,
    color: '#515152ff'
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40
  },
  subHeading: {
    fontSize: 20,
    marginTop: 20,
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
    marginBottom: 20,
    padding: 10,
    maxHeight: 420,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerText: {
    color: '#515152ff',
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  footerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1160e7ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerBtnTxt: {
    color: '#fff',
    fontSize: 16
  }
});
