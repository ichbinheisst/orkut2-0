import React from 'react'
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../home";
import { Icon } from "react-native-elements";
const Tab = createBottomTabNavigator();
export default function BottomNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="home"
              type="font-awesome"
              color="rgb(186,85,211)"
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
