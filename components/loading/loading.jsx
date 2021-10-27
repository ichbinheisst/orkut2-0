import React from "react";
import styled from "styled-components";
import { TouchableOpacity, Text } from "react-native";
import Loading from "../tools/loading";
import { Container,Img ,Label} from "./loadingStyle";
import { GlobalContext } from "../../context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser, PostLogin, checkToken } from "../../api/api";

export default function Load({ navigation }) {
  const { token, setToken, setUser, user } = React.useContext(GlobalContext);

  const getToken = async () => {
    const value = await AsyncStorage.getItem("token");
    value
      ? checkToken(value, navigation, setUser)
      : navigation.navigate("Login");
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return (
    <Container>
      <Img
      source={require('../../assets/images/orkut2.png')}
      />
      <Loading />
      <Label> Loading</Label>
      
    </Container>
  );
}
