import { StyleSheet, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function IconCard({iconName, size, color, desc}){
    return(
        <View style={styles.rootContainer}>
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
            <Text>{desc}</Text>
        </View>
    );
};
export default IconCard;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1 
    }
});