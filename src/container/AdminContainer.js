import React from 'react';
import { connect } from 'react-redux';
import Admin from "../components/Admin";


const AdminContainer = props => <Admin {...props}/>;

const mapStateToProps = (state) => {
    return{

    }
};

export default connect(mapStateToProps, {

})(AdminContainer);