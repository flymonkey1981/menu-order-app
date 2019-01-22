import * as types from "../constants/ActionTypes";
import axios from 'axios'

export const adminLogin = (form, history) => (dispatch) => {
    console.log('Admin Login is called' + form.email);

    axios.get('http://localhost:8080/findAdminByUserNameAndPassword', {
        params: {
            userName: form.username,
            password: form.password
        }
    }).then(function (response) {
        console.log(response);
        if (response.data) {
            let admin = response.data;
            dispatch({type: types.ADMIN_LOGIN_SUCCESS, admin});
            history.push('/adminmgt');
        } else {
            history.push('/admin');
        }
    }).catch(function (error) {
        console.log(error);
        history.push('/admin');
    });

};

export const addAdmin = (form, history) => (dispatch) => {
    console.log('addadmin is called'+form);
    axios.post('http://localhost:8080/createAdmin', form).then(function (response) {
        console.log(response);
        dispatch({type: types.ADD_ADMIN});

    }).catch(function (error) {
        console.log(error);
        history.push('/admin');
    });

};

export const addFood = (form, history) => (dispatch) => {
    console.log('addFood is called'+form);
    axios.post('http://localhost:8080/createFood', form).then(function (response) {
        console.log(response);
        dispatch({type: types.ADD_FOOD});
    }).catch(function (error) {
        console.log(error);
        history.push('/admin');
    });

};

export const addCustomer = (form, history) => (dispatch) => {
    console.log('addCustomer is called'+form);
    axios.post('http://localhost:8080/createCustomer', form).then(function (response) {
        console.log(response);
        dispatch({type: types.ADD_CUSTOMER});
    }).catch(function (error) {
        console.log(error);
        history.push('/admin');
    });

};

export const addChef = (form, history) => (dispatch) => {
    console.log('addChef is called'+form);
    axios.post('http://localhost:8080/createChef', form).then(function (response) {
        console.log(response);
        dispatch({type: types.ADD_CHEF});
    }).catch(function (error) {
        console.log(error);
        history.push('/admin');
    });

};