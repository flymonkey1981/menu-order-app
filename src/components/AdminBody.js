import PropTypes from 'prop-types';
import React, {Component} from 'react';

const propTypes = {
   addAdmin: PropTypes.func.isRequired
};
class AdminBody extends Component {
    render(){
        return (
            <div>
                AdminBody

            </div>
        );
    }
};

AdminBody.propTypes = propTypes;

export default AdminBody;