import { StyleSheet, View, Text, FlatList, Alert, AppState } from "react-native";
import Card from "../components/Card";
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect, useRef } from 'react';
// import { useIsFocused } from "@react-navigation/core";

function HomeScreen({navigation}){
  // const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     Alert.alert("Information", 'contacts added');
  //   }
  // }, [isFocused]);
    
  useFocusEffect(
    useCallback(() => {
      Alert.alert("Notice", "This is your Home Screen.");
    }, [])
  );
   const appState = useRef(AppState.currentState);

useEffect(() => {
  const subscription = AppState.addEventListener("change", nextAppState => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      Alert.alert("Notice", "This is your Home Screen.");
    }

    appState.current = nextAppState;
  });

  return () => {
    subscription.remove();
  };
}, [])

    const contacts = [
    { id: 1, person: 'Ameer', phone: '+91 9876543210',
        path: require('../assets/images/Ameer.png')
     },
    { id: 2, person: 'Iqbal', phone: '+91 9988776655',
        path: require('../assets/images/Iqbal.png')
     },
    { id: 3, person: 'Abhinav', phone: '+91 9123456789',
        path: require('../assets/images/Abhinav.png')
     },
    { id: 4, person: 'Anjana', phone: '+91 9090909090',
        path: require('../assets/images/Anjana.png')
     },
    { id: 5, person: 'Farhan Syed', phone: '+91 9345678123',
        path: require('../assets/images/Farhan.png')
     },
    { id: 6, person: 'Divya', phone: '+91 9887766554',
        path: require('../assets/images/Divya.png')
     },
    { id: 7, person: 'Rahul', phone: '+91 9012345678',
        path: require('../assets/images/Rahul.png')
     },
    { id: 8, person: 'Sneha', phone: '+91 9765432109',
        path: require('../assets/images/Sneha.png')
     },
    { id: 9, person: 'Aslam', phone: '+91 9867543210',
        path: require('../assets/images/Aslam.png')
     },
    { id: 10, person: 'Adhil Muhammed', phone: '+91 9321654987',
        path: require('../assets/images/Adhil.png')
     },
    { id: 11, person: 'Abi', phone: '+91 9995465321',
        path: require('../assets/images/Abi.png')
     },
  ];

  const renderItem = ({item}) => {
      return(
        <Card 
          person={item.person}
          phone={item.phone}
          onPress={()=> navigation.navigate('Details',{
            person: item.person,
            phone: item.phone,
            path: item.path
          })}
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

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex: 1,
        padding: 15,
        paddingTop: 80,
        backgroundColor: '#fff'
    },
    textContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    text:{
        fontSize: 16,
        color: '#424242ff',
    }
});