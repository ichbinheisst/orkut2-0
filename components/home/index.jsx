import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../../api/api";
import Story from "../story";
import Feed from "../feed";

export default function Home({ navigation }) {
  const { setToken, user, setUser, token } = React.useContext(GlobalContext);

  const [dados, setDados] = React.useState();
  React.useEffect(() => {
    const usuarios = "https://randomuser.me/api/?results=20";
    fetch(usuarios)
      .then((response) => response.json())
      .then((x) => setDados(x.results));
  }, []);



  const logout = () => {
    try {
      AsyncStorage.removeItem("token");
      setToken("");
      navigation.navigate("Login");
    } catch {}
  };

  return (
    <View style={styles.container}>
         <Story dados={dados}/>
       <Feed dados ={dados}/>
      <TouchableOpacity on onPress={logout}>
        <Text>sair</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(212,220,239)' 
    //justifyContent: "center",
    //alignItems: "center",
  },
});
