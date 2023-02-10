import { takeEvery, all, delay, race, fork, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import actions from './actions';
import services from './services';
import { storeData, retrieveData } from '../../core/localStorage'

function* signinWorker() {
    yield takeEvery(actions.SIGN_IN_REQUEST, function* ({ userCredentials, onSuccess }: any) {
        try {

            let { res, timeout } = yield race({
                res: call(services.signin, userCredentials),
                timeout: delay(15000),
            });

            if (res.statusCode === 200 && !timeout) {
                console.log("signinWorker statusCode ", res.statusCode);
                yield put({
                    type: actions.SIGN_IN_SUCCESS,
                    accessToken: res.access_token,
                })
                yield call(storeData, "accessToken", res.access_token)
                onSuccess()
            } else {
                Alert.alert('Found an error', res.message, [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ])
            }

        } catch (error) {
            console.log("signinWorker error ", error);
        }
    });
}

function* updateAuthStateWorker() {
    yield takeEvery(actions.UPDATE_AUTH_STATE, function* () {
        try {
            console.log("authStateWorker ");
            const accessToken: string = yield call(retrieveData, "accessToken")
            if (accessToken) {
                yield put({
                    type: actions.UPDATE_AUTH_STATE_SUCCESS,
                    isLoggedIn: true,
                })
            } else {
                yield put({
                    type: actions.UPDATE_AUTH_STATE_SUCCESS,
                    isLoggedIn: false,
                })
            }

        } catch (error) {
            console.log("signinWorker error ", error);
        }
    });
}

export default function* () {
    yield all([
        fork(signinWorker),
        fork(updateAuthStateWorker)
    ])
}