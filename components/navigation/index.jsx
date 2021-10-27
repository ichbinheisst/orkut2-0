import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../login";
import Load from "../loading/loading";
import Home from "../home";
import  BottomNav  from "./bottomNav";
import { GlobalStorage } from "../../context";

export default function MainNav() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Load} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BottomNav" component={BottomNav}/>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
