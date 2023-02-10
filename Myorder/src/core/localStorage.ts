import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(
            key,
            value,
        );
    } catch (error) {
        // Error saving data
    }
};

const retrieveData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            // We have data!!
            console.log(value);
            return value
        }
    } catch (error) {
        // Error retrieving data
        return null
    }
};

export { storeData, retrieveData }