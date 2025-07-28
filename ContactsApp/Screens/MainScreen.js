import { StyleSheet, View, Text, FlatList } from "react-native";
import Card from "../Components/Card";

function MainScreen(){
    const contacts = [
    { id: 1, person: 'Ameer', phone: '+91 9876543210' },
    { id: 2, person: 'Iqbal', phone: '+91 9988776655' },
    { id: 3, person: 'Abhinav', phone: '+91 9123456789' },
    { id: 4, person: 'Anjana', phone: '+91 9090909090' },
    { id: 5, person: 'Farhan Syed', phone: '+91 9345678123' },
    { id: 6, person: 'Divya', phone: '+91 9887766554' },
    { id: 7, person: 'Rahul', phone: '+91 9012345678' },
    { id: 8, person: 'Sneha', phone: '+91 9765432109' },
    { id: 9, person: 'Aslam', phone: '+91 9867543210' },
    { id: 10, person: 'Adhil Muhammed', phone: '+91 9321654987' },
    { id: 11, person: 'Abi', phone: '+91 9995465321' },
  ];

  const renderItem = ({item}) => {
      return(
        <Card 
          person={item.person}
          phone={item.phone}
        />
      );
  }
    return (
        <View style={styles.rootContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Total contacts {contacts.length}</Text>
            </View>
            <FlatList
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default MainScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 15,
        paddingTop: 80,
        backgroundColor: '#cac9c9ff'
    },
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    text:{
        fontSize: 16,
        color: '#424242ff',
    }
});