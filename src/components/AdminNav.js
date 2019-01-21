import PropTypes from 'prop-types';
import React, {Component} from 'react';

const propTypes = {
    admin: PropTypes.object.isRequired
};
class AdminNav extends Component {
    render(){
        const {admin} = this.props;
        return (
           <div>Welcome {admin.lastName} {admin.firstName}</div>
        );
    }
}

export default AdminNav;