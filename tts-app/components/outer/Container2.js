import { Alert, StyleSheet, View } from "react-native";
import Container from "./container";
import { useEffect, useState } from "react";


function Container2(){
    const [list1, setList1] = useState('');
        const [list2, setList2] = useState('');
        const [list3, setList3] = useState('');
        const [listView, setListView] = useState([]);
        function listHandler(){
            if (list1.trim() && list2.trim() && list3.trim() !== '') {
            setListView([...listView,
                {
                    id: Date.now().toString(),
                    person: list1,
                    phone: list2,
                    message: list3
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
                label1='Full Name'
                placeholder1='Enter your full name'
                value1={list1}
                onChangeText1={setList1}
                label2='Phone No'
                placeholder2='Enter your phone number'
                value2={list2}
                onChangeText2={setList2}
                label3='Message'
                placeholder3='Message.....'
                value3={list3}
                onChangeText3={setList3}
                text='Send Message'
                onPress={listHandler}
            />
        </View>
    );
};
export default Container2;
const styles = StyleSheet.create({
    root:{
        
    },
});