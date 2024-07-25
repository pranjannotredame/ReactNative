import React, { useState } from "react";

import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  View,
  StatusBar,
  Button,
  TextInput,
  Platform,
} from "react-native";

import Buttons from "./src/Buttons";

// import RoundedButton from "./src/RoundedBtn";
// import SquareBtn from "./src/SquareBtn";
// import Welcome from "./src/Welcome";
// import Login from "./src/Login";
// import Signup from "./src/Signup";

export default function App() {
  // const reactLogo = require("./assets/icon.png");
  // console.log(Dimensions.get('window'));

  // const [currentPage, setCurrentPage] = useState("");
  // const [user, setUser] = useState("");

  // pageChangeHandler = (currentPage) => {
  //   console.log("Set Page", currentPage);
  //   setCurrentPage(currentPage);
  // };

  // btnObj = {
  //   bgColor: "rgb(53 53 255)",
  //   textColor: "white",
  //   width: 200,
  //   height: 40,
  //   text: "Primary Button",
  //   logo: "★",
  // }

  // btnObj2={
  //   bgColor:'white',
  //   textColor:'teal',
  //   width:200,
  //   height:50,
  //   text:'Info Button',
  //   logo:'⚠',
  //   borderColor:'teal',
  //   borderWidth:2,
  // }
  


  return (
    <View style={[styles.container, styles.theme]}>
      {/* {currentPage === ""/ ? ( */}
      {/* //   <Welcome pageChangeHandler={pageChangeHandler} />
        // ) : currentPage === "Login" ? (
        //   <Login setUser={setUser} pageChangeHandler={pageChangeHandler} />
        // ) : (
          // <SwitchDemo pageChangeHandler={pageChangeHandler} */}
      {/* // <Signup pageChangeHandler={pageChangeHandler} />
        // )} */}
      {/* </UserContext.Provider> */}
      {/* <SwitchDemo/> */}

      {/* <RoundedBtn btnObj={btnObj} /> */}
      {/* <SquareBtn btnObj2={btnObj2}/> */}
      <Buttons/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
