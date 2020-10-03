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
  <View style={{flex:1, alignItems:"center", justifyContent: "center", backgroundColor: "forestgreen", }}>
  <Animated.View
  style={{
    width: 333,
    height: 375,
    borderRadius:10,
    backgroundColor:"darkgreen",
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
    <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:22 }}>
    “A quiet secluded life in the country, with the possibility of being useful to 
    people to whom it is easy to do good, and who are not accustomed to have it done to them; 
    then work which one hopes may be of some use; then rest, nature, books, music, love for 
    one's neighbor — such is my idea of happiness.”
    </Text>
    <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:17 }}>
    ― Leo Tolstoy, Family Happiness 
    </Text>
  </Animated.View>
  </View>
  );
}

export default FadeIn;






