import React from 'react';
import { connect } from 'react-redux';
import AddAdmin from "../components/AddAdmin";
import {addAdmin} from '../actions/AdminLoginAction';


const AddAdminContainer = props => <AddAdmin {...props}/>;

const mapStateToProps = (state) => {
    return{
        admin: state.admin.admin
    }
};

export default connect(mapStateToProps, {

    addAdmin
})(AddAdminContainer);