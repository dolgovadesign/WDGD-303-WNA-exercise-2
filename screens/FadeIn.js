import React, { useRef, useEffect } from "react";
import { StyleSheet,Text,
         Animated, 
         View} from "react-native";
import { useIsFocused } from "@react-navigation/native";

function FadeIn() {
  const fadeAnim = useRef(new Animated.Value(0)).current; //Initial value for opacity: 0
  const isFocused = useIsFocused();
  
  useEffect(() => {
    Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 1000,
    useNativeDriver: true,
  }).start();

  return ()=> fadeAnim.setValue(0)
}, [fadeAnim, isFocused]);

  return (
  <View style={{flex:1, alignItems:"center", justifyContent: "center" }}>
  <Animated.View
  style={{
    width:250,
    height: 50,
    borderRadius:10,
    backgroundColor:"purple",
    opacity: fadeAnim,
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [100, 0],
        }),
      },
    ],
  }}
  >
    <Text style={{ color: "white", textAlign: "center", margin: 10, fontSize:22 }}>
      FadeIn Animation
    </Text>
  </Animated.View>
  </View>
  );
}

export default FadeIn;




