import {
    all,
    call,
} from 'redux-saga/effects';
import testSaga from '../modules/TEMPLATE/saga';

const sagasList = [
    testSaga,
];

export default function* watchRootSaga() {
    yield all(sagasList.map(saga => call(saga)));
}
