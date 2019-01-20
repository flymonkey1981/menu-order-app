import React from 'react';
import { connect } from 'react-redux';
import Menus from "../components/Menus";


const MenusContainer = props => <Menus {...props}/>;

const mapStateToProps = (state) => {
    return{

    }
};

export default connect(mapStateToProps, {

})(MenusContainer);