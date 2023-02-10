import { takeEvery, all, delay, race, fork, call, put } from 'redux-saga/effects';
// import { message } from 'antd';
import actions from './actions';
import services from './services';
// import { serialize } from "../../utils/serialize";

function* getAddressWorker() {
    yield takeEvery(actions.GET_ADDRESS_REQUEST, function* ({ keyword }) {
        try {
            let { res, timeout } = yield race({
                res: call(services.get, keyword),
                timeout: delay(15000),
            });

            if (res.statusCode === 200 && !timeout) {
                yield put({ type: actions.GET_ADDRESS_SUCCESS, data: res.data })
            }

        } catch (error) {
        }
    });
}

export default function* () {
    yield all([
        fork(getAddressWorker),
    ])
}