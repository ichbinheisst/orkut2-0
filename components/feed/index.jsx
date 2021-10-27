import React from "react";
import {
  Container,
  H1,
  Scroll,
  PostPic,
  PictureProfile,
  Post,
  PostHeader,
  PostName,
  ReactContainer,
  PostDesContainer,
} from "./styleFeed.js";
import { TouchableOpacity, Text } from "react-native";
import { Icon } from "react-native-elements";
export default function Feed({ dados }) {
  return (
    <Container>
      <Scroll>
        {dados &&
          dados.map((element, index) => {
            console.log(element);
            return (
              <Post key={index}>
                <PostHeader>
                  <PictureProfile source={{ uri: element.picture.medium }} />
                  <PostName>
                    {" "}
                    {element.name.first} {element.name.last}{" "}
                  </PostName>
                </PostHeader>

                <PostDesContainer>
                    <Text>
                      teste de como vc pode escrever
                    </Text>
                </PostDesContainer>

              
                <PostPic
                  source={{
                    uri: `https://picsum.photos/500/500?random=${index + 1}`,
                  }}
                />
                <ReactContainer>
                  <TouchableOpacity>
                    <Icon
                      name="heart"
                      type="font-awesome"
                      size={18}
                      color="rgb(125,33,132)"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name="comment-o"
                      type="font-awesome"
                      size={18}
                      color="rgb(125,33,132)"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Icon
                      name="paper-plane-o"
                      type="font-awesome"
                      size={18}
                      color="rgb(125,33,132)"
                    />
                  </TouchableOpacity>
                </ReactContainer>
              </Post>
            );
          })}
      </Scroll>
    </Container>
  );
}
