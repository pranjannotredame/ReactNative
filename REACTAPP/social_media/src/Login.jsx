import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground, Switch,Platform} from 'react-native';

const backgroundImage = require('../assets/img/1000_F_164177216_nv7lB6SFNvMddVAtGP4401Ct4yBK7IZk.jpg');


const Login = ({pageChangeHandler}) => {
  const [email, setEmail] = useState('');// re-rendering
  const [password, setPassword] = useState('');// re-rendering
  // console.log(Platform.OS==='web')

  useEffect(()=>{
    //During the update process has no array
    console.log("Updated",password)
  },[email])


  // const handleLogin = () => {

  //   alert(`Email: ${email}\nPassword: ${password}`);
  // };
  //closure --> nested function

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="white"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.mybtn}>
          <Button
            title="Login"
            // onPress={handleLogin}
            color="#841584"
          />
           <Button
            title="Home"
            onPress={() => pageChangeHandler("")}
            color="#841584"
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom:80,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    color: 'black',
    paddingHorizontal: 10,
    marginBottom: 50,
  },
  mybtn:{
    borderColor:"black",
    height:100,
    width:100,
    justifyContent:"space-evenly", 
},
});

export default Login;
