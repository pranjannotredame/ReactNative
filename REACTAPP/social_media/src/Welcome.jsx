import React, { useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
// import { UserContext } from './UserContext';

const backgroundImage = require("../assets/img/animated-sunset-over-mountain-digital-600nw-2269357861.webp");

const Welcome = ({ pageChangeHandler }) => {
  // const  {setUser}=useContext(UserContext)
  // let count=0;
  // setInterval(()=>{
  //   count++;
  //   console.log("Welcome Timer",count)
  // },4000)
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <>
          <Text style={styles.welcomeText}>
            <h1>Welcome to Our App!</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              sit. Tempora.
            </p>
          </Text>
          <View style={styles.mybtn}>
            <Button 
              title="Login"
              onPress={() => pageChangeHandler("Login")}
            />
            <Button
              title="Signup"
              onPress={() => pageChangeHandler("Signup")}
            />
          </View>
        </>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
  },
  mybtn:{
      borderColor:"black",
      height:100,
      width:100,
      justifyContent:"space-evenly", 
  },
});

export default Welcome;
