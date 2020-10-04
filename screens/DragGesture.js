import React, { useRef, useEffect } from "react";
import { Dimensions, Text, Animated, View, StyleSheet, PanResponder } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default DragGesture = () => {
  const isFocused = useIsFocused();
  const screen = Dimensions.get("window");
  const bottomPanelHeight = 40;
  const ballOffsetY = 11;
  const centerY = (screen.height / 2) - (styles.outerball.height / 2) - bottomPanelHeight;
  const centerX = (screen.width / 2) - (styles.outerball.width / 2);
  const position = new Animated.ValueXY({ x: 0, y: ballOffsetY });

  //position.addListener((p) => console.log(`x: ${p.x}, y: ${p.y}`));

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, { dx: position.x, dy: position.y }], { useNativeDriver: false }),
    onPanResponderGrant: () => position.setOffset({ x: position.x._value,y: ballOffsetY, }),
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false
      }).start();
    },
  });

  useEffect(() => {
        return () => position.setValue({ x: 0, y: 0 });
    },
    [isFocused]);

  return (
    <View style={styles.container}>
        <View style={[styles.outerball, { top: centerY, right: centerX}]}>
            <Animated.View
                style={[styles.ball, position.getLayout()]}
                {...panResponder.panHandlers}>
                <Text style={styles.text}>)|(</Text>
            </Animated.View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "darkgreen",
    },
    ball:{
        backgroundColor: "orange",
        height: 65,
        width: 65,
        borderRadius: 50,
        alignContent: "center",
        position: "relative"
    },
    outerball: {
        backgroundColor: "darkgreen",
        height: 100,
        width: 100,
        position: "absolute",
        borderRadius: 50,
        borderWidth: 5,
        borderStyle: "dashed",
        borderColor: "white",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 50,
        marginTop: -2,
        color: "darkgreen"
    }
});
