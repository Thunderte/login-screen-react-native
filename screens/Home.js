
import React,{useEffect} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { WebView } from "react-native-webview/lib";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Home(){
    const checkLogin = async() =>{
        if (user){
            navigation.replace('Home')
        }
    }
    return (
        <WebView
            source={{
                uri: ''
            }}/>

)

}

