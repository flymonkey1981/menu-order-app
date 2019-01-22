import React from 'react';
import { connect } from 'react-redux';
import AddCustomer from "../components/AddCustomer";
import {addCustomer} from '../actions/AdminLoginAction';


const AddCustomerContainer = props => <AddCustomer {...props}/>;

const mapStateToProps = (state) => {
    return{
        admin: state.admin.admin
    }
};

export default connect(mapStateToProps, {
    addCustomer
})(AddCustomerContainer);