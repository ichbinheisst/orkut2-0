
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNav from './components/navigation';
import { GlobalStorage } from './context';
export default function App() {
  return (
    <GlobalStorage> 
      <MainNav/>
   </GlobalStorage>
    
  );
}

