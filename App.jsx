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


 const Btn = ({title})=>(
      <TouchableOpacity style={{padding:10,
        borderRadius:10,
        elevation:2,
        backgroundColor:getColor(colors.light1,colors.dark1),
        height:70,
        width:70,
        margin:16
       }}>
           <Text style={{fontSize:37, color:"black"
           ,
           textAlign:'center',
           textAlignVertical:'center'
          
          }}>{title}</Text>
      </TouchableOpacity>
 )

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        backgroundColor: getColor(colors.light, colors.dark),
      }}
    >
      <StatusBar style="auto" />
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
          paddingRight:20
        }}
      >
       {result}
      </Text>

        <View style={{flexDirection:'row', flexWrap:'wrap' , width:'140%'} }>
             <Btn title="C"/>
            <Btn title="DL"/>
            <Btn title="/"/>
            <Btn title="%"/>
            <Btn title="7"/>
            <Btn title="8"/>
            <Btn title="9"/>
       
            <Btn title="4"/>
            <Btn title="5"/>
            <Btn title="5"/>
            <Btn title="."/>
            <Btn title="1"/>
            <Btn title="2"/>
            <Btn title="3"/>
            <Btn title="+"/>
            <Btn title="00"/>
            <Btn title="0"/>
            <Btn title="."/>
            <Btn title="="/>                               
        </View>

    </View>
  );
}
