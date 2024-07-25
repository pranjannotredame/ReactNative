import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

const SquareBtn = ({ btnObj2}) => {

    const { bgColor, text, width, height, logo,textColor,borderWidth,borderColor } = btnObj2;
  return (
    <View style={[styles.mainContainer, {width:width,height:height}]}>




    <TouchableOpacity onPress={() => { }} style={[styles.btnContainer,{backgroundColor:bgColor,borderWidth:borderWidth, borderColor:borderColor}]}>
      <View>
        <Text style={[styles.btnText,{color:textColor}]}>{logo} {text}</Text>
      </View>
    </TouchableOpacity>


  </View>
  )
}




const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
    },
    btnText: {
      fontSize: 15,
      fontWeight: "500",
    },
    btnContainer: {
      padding:0,
      borderRadius: 0,
     borderColor:'green',

      width: '95%',
      height: '95%',
      justifyContent: 'center',
      alignItems: 'center',
  
  
    }
  })

  export default SquareBtn;
