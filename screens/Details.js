import React, { useState } from "react";
import { StyleSheet,
         Text, 
         View,
         Image, 
         Dimensions, 
         AsyncStorage
        } from "react-native";
import AppButton from "../components/AppButton";

const images = {
  1: require('../assets/images/image01.jpeg'),
  2: require('../assets/images/image02.jpeg'),
  3: require('../assets/images/image03.jpeg'),
  4: require('../assets/images/image04.jpeg'),
  5: require('../assets/images/image05.jpeg'),
  6: require('../assets/images/image06.jpeg'),
  7: require('../assets/images/image07.jpeg'),
  8: require('../assets/images/image08.jpeg'),
  9: require('../assets/images/image09.jpeg'),
  10: require('../assets/images/image10.jpeg'),
  11: require('../assets/images/image11.jpeg')
};

export default function Details() {
  const [count, setCount] = useState(1);

  const changeCount = (updatedCount) => {
    if (updatedCount < 1 || updatedCount > Object.keys(images).length) {
      return;
    }

    setCount(updatedCount);
    updateAsyncStorage(updatedCount);
  };

  const increment = () => {
    changeCount(count + 1);
  };

  const decrement = () => {
    changeCount(count - 1);
  };
  
  function updateAsyncStorage(count){
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.removeItem("count");
        await AsyncStorage.setItem('count', JSON.stringify(count));
        resolve();
      } catch(e){
        return reject(e);
      }
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}> 
        <Text style={styles.text}>Life brings tears, smiles, and memories. The tears dry, the smiles fade,</Text>
        <Text style={styles.text}>but the memories last</Text>
        <Text style={[styles.text, styles.bottomText]}>FOREVER.</Text>

        <Image style={styles.image} source={images[count]} />
        <Text style={styles.textCount}>Gratitude {count}</Text>
     
      </View>
      
      <View style={styles.bottomContainer}>
        <AppButton style={styles.counterBtn} text="PREV" onPress={decrement} />
        <AppButton style={styles.counterBtn} text="NEXT" onPress={increment} />
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "forestgreen",
    // alignItems: "center",
    // justifyContent: "center",
  },
  topContainer: {
    flexGrow: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomContainer: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    paddingBottom: 50
  },
  image: {
    width: Dimensions.get("window").width - 50,
    height: 400,
    resizeMode: "cover",
  },
  text: {
    color: "beige",
    fontSize: 21,
    
    textAlign: "center",
  },
  bottomText: {
    paddingBottom: 20
  },
  textCount:{
    marginTop: 11,
    color: "lightgrey",
    fontSize: 20
  }
});
