import {
    takeEvery,
} from 'redux-saga/effects';
import ActionTypes from '../../constants/actionTypes';

export default function* watchTestSaga() {
    yield takeEvery(ActionTypes.TEST_ACTION, testAction);
}

export function* testAction() {
    console.log('SAGA - testAction');
}
