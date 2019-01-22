import React from 'react';
import { connect } from 'react-redux';
import AddFood from "../components/AddFood";
import {addFood} from '../actions/AdminLoginAction';


const AddFoodContainer = props => <AddFood {...props}/>;

const mapStateToProps = (state) => {
    return{
        admin: state.admin.admin
    }
};

export default connect(mapStateToProps, {
    addFood
})(AddFoodContainer);