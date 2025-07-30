import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import DetailsCard from "../components/Cards/DetailCard";

function DetailsScreen(){
    const data = [
        {
            id: '1',
            path: require('../assets/images/img1.png'),
            docName: 'dgdhs'
        },
        {
            id: '2',
            path: require('../assets/images/img1.png'),
            docName: 'dgdhs'
        },
        {
            id: '3',
            path: require('../assets/images/img1.png'),
            docName: 'dgdhs'
        },
        {
            id: '4',
            path: require('../assets/images/img1.png'),
            docName: 'dgdhs'
        },
        

    ]
    return(
        <>
        <StatusBar style="light"/>
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>Certificates</Text>
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=>(
                    <DetailsCard 
                        path={item.path}
                        docName={item.docName}
                    />
                )}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 10 }}
                showsVerticalScrollIndicator={false}
            />
        </View>
        </>
    );
};
export default DetailsScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex: 1
    },
    headerContainer:{
        backgroundColor: '#1160e7ff',
        paddingTop: 40,
        paddingHorizontal: 20,
        paddingBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText:{
        fontSize: 24,
        color: '#fff',
    },

});