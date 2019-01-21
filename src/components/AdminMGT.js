import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/components/adminMGT.scss';
import AdminNav from "./AdminNav";
import AdminBody from "./AdminBody";
import AdminFooter from './AdminFooter';

const propTypes = {
    admin: PropTypes.object.isRequired
};

class AdminMGT extends Component {
    render() {
        const {admin} = this.props;
        return (
            <div>
                <div className="admin-nav">
                    <AdminNav admin={admin}/>
                </div>
                <div className="admin-body">
                    <AdminBody/>
                </div>
                <div className="admin-footer">
                    <AdminFooter/>
                </div>
            </div>

        );

    }
};

export default AdminMGT;