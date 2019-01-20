import * as types from '../constants/ActionTypes';

const initialState = {
    isLogin: false,
    user: {},
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                user: action.user,
                isLogin: true,

            };
        default:
            return state;
    }

};
export default login;