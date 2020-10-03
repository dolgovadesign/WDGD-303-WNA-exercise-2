
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo, FontAwesome, MaterialIcons, Feather } from "@expo/vector-icons";
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
          activeTintColor: "darkgreen",
          inactiveTintColor: "gray",
     }}
      
      >
      <RootTab.Screen name="FadeIn" 
                      component={FadeIn}
                      options={{
                        title: "Quote",
                        tabBarIcon: ({ focused }) => (
                          <Entypo name="open-book" size={24} color={focused ? "darkgreen" : "gray"} />
                        ),
                      }}
        />
      <RootTab.Screen name="Slideshow" 
                      component={Details}
                      options={{
                        title: "Slideshow",
                        tabBarIcon: ({ focused }) => (
                          <FontAwesome name="camera-retro" size={24} color={focused ? "darkgreen" : "gray"} />
                        ),
                      }}
                      />

<RootTab.Screen name="Rotate" 
                      component={Rotate}
                      options={{
                        title: "Rotate",
                        tabBarIcon: ({ focused }) => (
                          <MaterialIcons name="rotate-right" size={24} color={focused ? "darkgreen" : "gray"} />
                        ),
                      }}
                      />

<RootTab.Screen name="DragGesture" 
                component={DragGesture}
                options={{
                title: "Play",
                  tabBarIcon: ({ focused }) => (
                    <Feather name="play-circle" size={24} color={focused ? "darkgreen" : "gray"} />
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