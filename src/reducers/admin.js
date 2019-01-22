import * as types from '../constants/ActionTypes';

const initialState = {
    isLogin: false,
    admin: {},
    food: {}
};

const adminLogin = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                admin: action.admin,
                isLogin: true,

            };
        case types.ADD_ADMIN:
            return {
                ...state

            };
        case types.ADD_ADMIN:
            return {
                ...state,
                food: action.food

            };
        default:
            return state;
    }

};
export default adminLogin;