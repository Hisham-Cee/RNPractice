import { Image, Pressable, StyleSheet, View } from "react-native";

function ImageAttachment({uri, onPress}){

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                <Image source={{uri}} style={styles.image} resizeMode="cover"/>
            </Pressable>
        </View>
    );
};
export default ImageAttachment;
const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
    },
    image:{
        width: 120,
        height: 120,
        borderRadius: 8,
        
    },
});