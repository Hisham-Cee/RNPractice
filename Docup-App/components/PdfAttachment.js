import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

function PdfAttachment({onPress}){
    
    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>                
                <View style={styles.pdfContainer}>
                    <Ionicons name="document" size={66} color="black" />
                    <Text style={styles.buttonText}>PDF</Text>
                </View>   
            </Pressable>
        </View>
    );
};
export default PdfAttachment;
const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    pdfContainer:{
        width: 120,
        height: 120,
        borderRadius: 8,
        backgroundColor: '#d1d3d6ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#000',
        marginTop: 10,
        fontSize: 16
    },
});