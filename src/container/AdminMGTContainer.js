import React from 'react';
import { connect } from 'react-redux';
import AdminMGT from "../components/AdminMGT";


const AdminMGTContainer = props => <AdminMGT {...props}/>;

const mapStateToProps = (state) => {
    return{
      admin: state.admin.admin
    }
};

export default connect(mapStateToProps, {


})(AdminMGTContainer);