import { StyleSheet, Text, View } from "react-native";

function ContactDetailsScreen(){
    return (
        <View style={styles.rootContainer}>
            <Text>Contact Info</Text>
        </View>
    );
};

export default ContactDetailsScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
    },
});