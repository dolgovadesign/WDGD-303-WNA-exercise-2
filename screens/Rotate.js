import React, { useRef, useEffect } from "react";
import { StyleSheet,
         Text,
         Animated, 
         Button,
         View} from "react-native";
import { useIsFocused } from "@react-navigation/native";

function Rotate() {
  const spinAnim = useRef(new Animated.Value(0)).current; //Initial value for opacity: 0
  const isFocused = useIsFocused();
  
  const startAnim = () => {
    spinAnim.setValue(0)
    Animated.timing(spinAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };






  useEffect(() => {

  startAnim();
  return ()=> spinAnim.setValue(0)
}, [spinAnim, isFocused]);

  return (
  <View style={{flex:1, alignItems:"center", justifyContent: "center" }}>
  <Animated.View
  style={{
    width:250,
    height: 250,
    borderRadius:10,
    backgroundColor:"forestgreen",
    transform: [
      {
        rotate: spinAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "360deg"],
        }),
      },
    ],
  }}
  >
    <Text style={{ color: "white", textAlign: "center", margin: 10, fontSize:22 }}>
      Spin Animation
      </Text>
  </Animated.View>
  <Button title="Start" onPress={startAnim} />
  </View>
  );
}

export default Rotate;




