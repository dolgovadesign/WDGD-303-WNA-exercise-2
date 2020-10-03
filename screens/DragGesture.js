import React, { useRef, useEffect } from "react";
import { Text, Animated, View, StyleSheet, PanResponder } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default DragGesture = () => {
    const position = useRef(new Animated.ValueXY()).current;
    const isFocused = useIsFocused();
    
    const panResponder = PanResponder.create({
       onMoveShouldSetPanResponderCapture:() => true,
       onPanResponderMove: Animated.event([
           null,
           { dx: position.x, dy: position.y },
       ]),
       onPanResponderGrant: ()=>{
           position.setOffset({
               x: position.x._value,
               y: position.y._value,
           });
       },
    //onPanResponderRelease: () => {
    //    position.flattenOffset();
    //},
    //});
    onPanResponderRelease: () => {
     Animated.spring(position, {
      toValue: { x: 0, y: 0 },
     }).start();    
    },
    });

    useEffect(() => {
        return ()=> position.setValue({ x: 0, y: 0});
   }, [isFocused]);

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.ball, position.getLayout()]} 
                           {...panResponder.panHandlers} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    ball:{
        backgroundColor: "blue",
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    });