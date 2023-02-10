import React, { memo } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Background>
      <Header>Hello admin</Header>
      <Paragraph>
        You are on a private route
      </Paragraph>
      <Button mode="contained" onPress={async () => {
        await AsyncStorage.removeItem('accessToken');
        navigation.navigate('Auth')
      }}>
        Sign out
      </Button>
    </Background>
  )
};

export default memo(HomeScreen);
