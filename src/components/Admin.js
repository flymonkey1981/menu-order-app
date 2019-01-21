import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/components/admin.scss';
import $ from "jquery";

const propTypes = {
    adminLogin: PropTypes.func.isRequired
};

class Admin extends Component {
    componentDidMount() {
        // Jquery here $(...)...
        $('.message a').click(function(){
            $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        });
    }

    constructor() {
        super();
        this.state = {
            form: {
                username: '',
                password: ''

            }

        };
    }

    onChange = (e) => {
        let form = {...this.state.form};
        form[e.target.name] = e.target.value
        this.setState({form});
    }

    render(){
        const {adminLogin, history} = this.props;
        const {form} = this.state;
        return(
            <div className="login-page">
                <div className="form">
                    <h1>Admin</h1>
                    <form className="login-form" onSubmit={(event) => {
                        event.preventDefault();
                        adminLogin(form, history);
                    }}>
                        <input type="text" name="username" placeholder="username" value={form.username}
                               onChange={this.onChange}/>
                        <input type="password" name="password" placeholder="password" value={form.password}
                               onChange={this.onChange}/>
                        <button>login</button>
                    </form>
                </div>
            </div>
        );
    }
};

Admin.propTypes = propTypes;

export default Admin;