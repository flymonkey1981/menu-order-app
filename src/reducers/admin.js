import * as types from '../constants/ActionTypes';

const initialState = {
    isLogin: false,
    admin: {},
};

const adminLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                admin: action.admin,
                isLogin: true,

            };
        default:
            return state;
    }

};
export default adminLogin;