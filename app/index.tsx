// Packages:
import React from 'react'
import styled from 'styled-components/native'


// Components:
import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'


// Styles:
const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFFFFF;
`


// Functions:
const App = () => {
  return (
    <Wrapper>
      <Text>Hello!</Text>
      <StatusBar style="auto" />
    </Wrapper>
  );
}


// Exports:
export default App
