import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const RoundedBtn = ({ btnObj}) => {
  const { bgColor, text, width, height, logo,textColor } = btnObj;
 
  return (
    <View style={[styles.mainContainer, {width:width,height:height}]}>

      <TouchableOpacity onPress={() => { }} style={[styles.btnContainer,{backgroundColor:bgColor}]}>
        <View>
          <Text style={[styles.btnText,{color:textColor}]}>{logo} {text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RoundedBtn;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 15,
    fontWeight: "600",
  },
  btnContainer: {
    padding: 10,
    borderRadius: 20,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})