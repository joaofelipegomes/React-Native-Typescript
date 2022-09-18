import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

const App: React.FC = () => {
  return (
    <S.Container>
      <S.Text>Eu amo o Marco.</S.Text>
      <StatusBar style="auto" />
    </S.Container>
  );
};

const S = {
  Container: styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
  `,
  Text: styled.Text`
    color: #f00;
    font-weight: 800;
  `,
};

export default registerRootComponent(App);
