import React from 'react';
import { connect } from 'react-redux';
import AddChef from "../components/AddChef";
import {addChef} from '../actions/AdminLoginAction';


const AddChefContainer = props => <AddChef{...props}/>;

const mapStateToProps = (state) => {
    return{
        admin: state.admin.admin
    }
};

export default connect(mapStateToProps, {
    addChef
})(AddChefContainer);