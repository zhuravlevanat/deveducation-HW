import ActionTypes from '../../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.TEST_ACTION:
            return {
                ...state,
                ...action.payload,
            };

        default: {
            return state;
        }
    }
};
