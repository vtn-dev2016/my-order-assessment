// import Cookies from 'js-cookie';
import { retrieveData } from './localStorage'
import { Alert } from 'react-native';

class SuperFetch {
  fetchObj: any;
  methods: Array<string>;
  constructor() {
    this.fetchObj = {};
    this.methods = ['get', 'post', 'put', 'patch', 'delete'];
    this.bindMethod();
  }

  bindMethod() {
    this.methods.forEach((method) => {
      this.fetchObj[method] = this.fetch.bind(this, method);
    });
  }

  async fetch(method: string, path: string, bodyObj: any) {
    try {
      console.log("fetch ", path, bodyObj)
      const accessToken = await retrieveData("accessToken") || "";
      console.log("accessToken ", accessToken)
      const response = await fetch(`http://localhost:9090/api/v1/${path}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        method,
        body: method !== 'get' ? JSON.stringify({ ...bodyObj }) : undefined,
      });
      console.log("response.status ", response.status)
      if (response.status === 403) {
        // clear
        Alert.alert('Found an error', "Unauthorized", [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
      ])
      }
      const json = await response.json();
      return { ...json, statusCode: response.status };
    } catch (error) {
      console.log('error', error);
    }
  }

  get instance() {
    return this.fetchObj;
  }
}

export default new SuperFetch().instance;
