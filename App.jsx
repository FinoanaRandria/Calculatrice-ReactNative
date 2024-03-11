import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState("test");
  const colors = {
    dark: "#22252D",
    dark1: "#292B36",
    dark2: "#272B33",
    light: "#FFF",
    light1: "#F1F1F1",
    light2: "#F7F7F7",
  };

  const getColor = (dark, light) => (darkTheme ? dark : light);

  const Btn = ({ title }) => (
    <TouchableOpacity
    onPress={()=>{}}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark1),
        height: 65,
        width: 65,
        margin: 16,
        
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "black",
          textAlign: "center",
          textAlignVertical: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
 
   
  

 
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
      }}
    >
      
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={darkTheme ? colors.dark : colors.light}
      />

      <Text
        style={{
          fontSize: 40,
          color: getColor(colors.dark, colors.light),
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
          marginTop:120
          ,
          paddingBottom:20,
          color:getBtnColor()
        }}
      >
        {result}
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor:getColor(colors.light2 ,colors.dark2),
          borderRadius:20
        }}
      >
        <Btn title="C"  type="top"/>
        <Btn title="DL" type="top" />
        <Btn title="/"  type="top"/>
        <Btn title="%" type="top"/>
        <Btn title="7" type="number" />
        <Btn title="8"  type="number"/>
        <Btn title="9"type="number" />
        <Btn title="*" type="right" />
        <Btn title="4"type="number" />
        <Btn title="5" type="number"/>
        <Btn title="6"type="number" />
        <Btn title="-" type="right" />
        <Btn title="1"type="number" />
        <Btn title="2" type="number"/>
        <Btn title="3" type="number"/>
        <Btn title="+" type="right"  />
        <Btn title="00"type="number" />
        <Btn title="0" type="number"/>
        <Btn title="." type="number"/>
        <Btn title="=" type="right"  />
      </View>
    </View>
  );
}
