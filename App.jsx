import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Switch } from "react-native";
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

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        paddingVertical: 20,
        backgroundColor: getColor(colors.dark, colors.light),
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
          color: getColor(colors.light, colors.dark),
          width: "100%",
          textAlign: "right",
          paddingRight:20
        }}
      >
       {result}
      </Text>

        <View style={{flexDirection:'row'}}>
            <TouchableOpacity>
                <Text>1</Text>
            </TouchableOpacity>

        </View>

    </View>
  );
}
