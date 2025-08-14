import { Alert, StyleSheet, View } from "react-native";
import Container from "./container";
import { useEffect, useState } from "react";

function Container1(){
    const [list1, setList1] = useState('');
    const [list2, setList2] = useState('');
    const [list3, setList3] = useState('');
    const [listView, setListView] = useState([]);
    function listHandler(){
        if (list1.trim() && list2.trim() && list3.trim() !== '') {
        setListView([...listView,
            {
                id: Date.now().toString(),
                name: list1,
                contact: list2,
                desc: list3
            }
        ]);
        setList1('');
        setList2('');
        setList3('');
    }else{Alert.alert('Invalid!','Please fill complete details')}
    }
    useEffect(()=>{
        console.log(listView)
    },[listView])
    return(
        <View style={styles.root}>
            <Container 
                label1='Name'
                placeholder1='Enter your name'
                value1={list1}
                onChangeText1={setList1}
                label2='Contact No'
                placeholder2='Enter your mobile number'
                value2={list2}
                onChangeText2={setList2}
                label3='Description'
                placeholder3='Tell us your need...'
                value3={list3}
                onChangeText3={setList3}
                text='Submit'
                onPress={listHandler}
            />
        </View>
    );
};
export default Container1;
const styles = StyleSheet.create({
    root:{
        
    },
});