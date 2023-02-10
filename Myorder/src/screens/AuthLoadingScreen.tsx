import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthLoadingScreen extends React.Component<any, any> {
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const accessToken = await AsyncStorage.getItem('accessToken');
        this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
    };

    render() {
        return (
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

export default AuthLoadingScreen