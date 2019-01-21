import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from '../container/LoginContainer';
import MenusContainer from '../container/MenusContainer';
import AdminContainer from '../container/AdminContainer';
import AdminMGTContainer from '../container/AdminMGTContainer';
import AddAdminContainer from '../container/AddAdminContainer';

const propTypes = {

};

class Root extends Component {
    render() {

        return (

            <Router>
                <Switch>
                    <Route exact path="/" component={LoginContainer}/>
                    <Route path="/login" component={LoginContainer}/>
                    <Route path="/menus" component={MenusContainer}/>
                    <Route path="/admin" component={AdminContainer}/>
                    <Route path="/adminmgt" component={AdminMGTContainer}/>
                    <Route path="/addadmin" component={AddAdminContainer}/>
                </Switch>
            </Router>

        );
    }

};

Root.propTypes = propTypes;

export default Root;