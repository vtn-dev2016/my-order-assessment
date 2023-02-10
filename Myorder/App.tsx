import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import App from './src';
import { theme } from './src/core/theme';
import { store } from './src/reduxs/store';


const Main = () => (
  <NavigationContainer>
    <ReduxProvider store={store}>
      <Provider theme={theme}>
        <App />
      </Provider>
    </ReduxProvider>
  </NavigationContainer>
);

export default Main;
