import React from "react";
import { Container, Header, H1, Img } from "./storyStyle";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";
export default function Story({dados}) {
 
  

  return (
    <Container>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Header>
          {dados &&
            dados.map((element, index) => {
              return (
                <TouchableOpacity key={index}>
                  <Img source={{ uri: element.picture.medium }} />
                </TouchableOpacity>
              );
            })}
        </Header>
      </ScrollView>
    </Container>
  );
}
