
import React from "react";
import styled from "styled-components";

export const Container = styled.View`
  
 flex:1;
 justify-content:center ;
 align-items: center;
 align-content: center;
 
`;

export const Scroll = styled.ScrollView`
 
 width:100%;
 align-content:center ;

 
`;

export const H1 = styled.Text`
  font-size: 20px;
`;

export const Post= styled.View`
padding-top: 10px ;
margin-top: 20px;
background-color: #fff;

justify-content: center;

`

export const PostHeader = styled.View`
display: flex;
flex-direction: row;
align-items: center;

`

export const PostPic = styled.Image`
  width: 98%;
  height: 250px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
  margin-top: 5px;
  align-self: center;
  
`;
export const PictureProfile=styled.Image`
width: 40px;
height: 40px;
border-radius: 100px;
margin-left: 10px;
margin-right:20px ;
`
export const PostName = styled.Text`
font-size: 18px;

color: rgb(125,33,132);

`
 export const ReactContainer = styled.View`
 width: 80%;
 height: 50px;
 align-self: center;
 flex-direction: row;
 justify-content: space-around;
 border-radius: 20px;
 padding-top: 14px;
 border-color: rgb(125,33,132) ;
 border-width: 0.2px;
 margin-top: -14px;
 
 `
export const PostDesContainer = styled.View`
padding-top:15px;
margin-left: 30px;
`