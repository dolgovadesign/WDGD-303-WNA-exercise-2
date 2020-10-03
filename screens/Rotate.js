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
  <View style={{flex:1, alignItems:"center", backgroundColor: "darkgreen", justifyContent: "center" }}>
  <Animated.View
  style={{
    width: 333,
    height: 333,
    backgroundColor:"darkgreen",
    borderWidth: 2,
    borderRadius: 23,
    borderColor: "white",
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
    <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:22 }}>
      “Love is life. All, everything that I understand, I understand only because I love. 
      Everything is, everything exists, only because I love. Everything is united by it alone. 
      Love is God, and to die means that I, a particle of love, shall return to the general 
      and eternal source.”
    </Text>
    <Text style={{ color: "white", textAlign: "center", margin: 15, fontSize:17 }}>
      ― Leo Tolstoy 
    </Text>
  </Animated.View>
  <Button  title="Click Me!"
           onPress={startAnim}
           color="lightgreen"
           accessibilityLabel="Rotate quote" />
  </View>
  );
}

export default Rotate;




