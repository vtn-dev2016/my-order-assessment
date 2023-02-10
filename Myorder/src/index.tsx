import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    HomeScreen,
    LoginScreen,
    AuthLoadingScreen
} from './screens';

const AppStack = createStackNavigator({ Home: HomeScreen });
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: AuthLoadingScreen,
            App: AppStack,
            Auth: AuthStack,
        },
        {
            initialRouteName: 'AuthLoading',
        }
    )
);