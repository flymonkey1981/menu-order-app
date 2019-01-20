import * as types from "../constants/ActionTypes";
import axios from 'axios'

export const login = (form, history) => (dispatch) => {
    console.log('Login is called' + form.email);

    axios.get('http://localhost:8080/findByUserNameAndPassword', {
        params: {
            userName: form.email,
            password: form.password
        }
    }).then(function (response) {
        console.log(response);
        if (response.data) {
            dispatch({type: types.LOGIN_SUCCESS, response});
            history.push('/menus');
        } else {
            history.push('/login');
        }
    }).catch(function (error) {
        console.log(error);
        history.push('/login');
    });
}