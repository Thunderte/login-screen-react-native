import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
export default function App(){
const [user, Setuser] = useState('');
const [password, Setpassword] = useState('');




    return (
    <View style={styles.container}>
        <StatusBar hidden />
        <Image source={require('./assets/logo.png')} />
        <Text style={{textAlign: 'center', color: 'white', marginBottom: 10, fontWeight: 'bold', height: 30,}}>Login</Text>
        <TextInput placeholder="Username..." style={styles.Textinput} onChageText={text=>Setuser(text)}/>
        <TextInput secureTextEntry={true} placeholder="Password..." style={styles.Textinput} onChageText={text=>Setpassword(text)}/>
        <TouchableOpacity style={styles.buttonlogin} onPress={()=>login()}>
            <Text style={{color: 'white', textAlign: 'center',}}>Logar</Text>
        </TouchableOpacity>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e0e',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        },
    Textinput: {
      width: '80%',
      height: 40,
      backgroundColor: 'white',
      borderRadius: 40,
      paddingLeft: 20,
      marginBottom: 10,
    },
    buttonlogin: {
        width: '80%',
        height: 40,
        backgroundColor: '#6e3dff',
        borderRadius: 20,
        justifyContent: 'center',
    },
});
