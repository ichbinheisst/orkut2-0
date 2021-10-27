import React from "react";
import {
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import {
  InputArea,
  H1,
  Container,
  Button,
  InputBox,
  Input,
  LoginTextButton,
  Label,
  Img,
  HeaderName,
  ButoonImage
} from "./loginStyle";
import { Icon } from "react-native-elements";
import { PostLogin } from "../../api/api";
import { GlobalContext } from "../../context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const { token, setToken, setUser } = React.useContext(GlobalContext);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [error, setErro] = React.useState("");
  async function storeData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log("valor nao gravado");
    }
  }

  const handleLogin = () => {
    if (password && email) {
      let user = {
        email,
        password,
      };
      PostLogin(user, setToken, setErro, setUser);
    }
    setEmail("");
    setPassword("");
  };

  React.useEffect(() => {
    if (token) {
      storeData("token", token);
      navigation.navigate("BottomNav");
    }
  }, [handleLogin]);


  return (
    <TouchableWithoutFeedback>
      <Container>
        <InputArea>
          
          <HeaderName
          source={require('../../assets/images/orkut.png')}
          />
            <Img
            source={require('../../assets/images/orkut2.png')}
            />


          <InputBox>
          <Icon
            name='user'
            type="font-awesome"
            size= {25}
            color='rgb(125,33,132)'
            />
            <Input
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </InputBox>
          <InputBox>
          <Icon
            name='lock'
            type="font-awesome"
            size= {25}
            color='rgb(125,33,132)'
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              textContentType="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </InputBox>

          <Button onPress={handleLogin}>
            <ButoonImage
            source={require('../../assets/images/logo.png')}
            />
            <Label> Enter</Label>
          </Button>

          <TouchableOpacity>
            <Label style={{ marginTop: 12, textAlign: "center" }}>
              Esqueceu a senha ? {error && error}
            </Label>
          </TouchableOpacity>
        </InputArea>
      </Container>
    </TouchableWithoutFeedback>
  );
}
