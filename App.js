
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, Foundation} from "@expo/vector-icons";
import { Text, 
         View, 
         Button, 
         Alert, 
         Image, 
         Dimensions, 
         AsyncStorage,
         StyleSheet
        } from "react-native";

import Home from "./screens/Home";
import Details from "./screens/Details";
import FadeIn from "./screens/FadeIn";
import Rotate from "./screens/Rotate";
import DragGesture from "./screens/DragGesture";

const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();

const RootTabNavigator = () => {
  return (
    <RootTab.Navigator
        tabBarOptions={{
          activeTintColor: "purple",
          inactiveTintColor: "gray",
     }}
      
      >
      <RootTab.Screen name="FadeIn" 
                      component={FadeIn}
                      options={{
                        title: "Fade In",
                        tabBarIcon: ({ focused }) => (
                          <Entypo name="air" size={24} color={focused ? "purple" : "gray"} />
                        ),
                      }}
        />
      <RootTab.Screen name="Slideshow" 
                      component={Details}
                      options={{
                        title: "Slideshow",
                        tabBarIcon: ({ focused }) => (
                          <Foundation name="play" size={24} color="black" />
                        ),
                      }}
                      />

<RootTab.Screen name="Rotate" 
                      component={Rotate}
                      options={{
                        title: "Rotate",
                        tabBarIcon: ({ focused }) => (
                          <AntDesign name="retweet" size={24} color="black" />
                        ),
                      }}
                      />

<RootTab.Screen name="DragGesture" 
                component={DragGesture}
                options={{
                title: "DragGesture",
                  tabBarIcon: ({ focused }) => (
                    <Entypo name="copy" size={24} color="black" />
                  ),
                }}
                />

    </RootTab.Navigator>       
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Animations" component={RootTabNavigator} /> 
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer> 
  );
}