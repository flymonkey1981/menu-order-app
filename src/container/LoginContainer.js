import React from 'react';
import { connect } from 'react-redux';
import Login from "../components/Login";
import {login} from '../actions/LoginAction';

const LoginContainer = props => <Login {...props}/>;

const mapStateToProps = (state) => {
    return{

    }
};

export default connect(mapStateToProps, {
    login
})(LoginContainer);