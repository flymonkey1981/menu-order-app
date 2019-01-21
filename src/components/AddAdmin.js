import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/components/addAdmin.scss';

const propTypes = {
    addAdmin: PropTypes.func.isRequired
};
class AddAdmin extends Component {

    constructor() {
        super();
        this.state = {
            form: {
                lastName: '',
                firstName: '',
                userName: '',
                phoneNumber: '',
                password: '',
                addressLine1: '',
                addressLine2: '',
                suburb: '',
                state: '',
                country: '',
                postCode: ''
            }

        };
    }

    onChange = (e) => {
        let form = {...this.state.form};
        form[e.target.name] = e.target.value
        this.setState({form});
    }


    render() {
        const {addAdmin, history} = this.props;
        const {form} = this.state;
        return (
            <div className="add-admin">
                <h1>Add Admin</h1>
                <form action="" method="post" onSubmit={(event) => {
                    event.preventDefault();
                    addAdmin(form, history);
                }}>
                    <div className="form-group">
                        <lable for="lastName">Last Name:</lable>
                        <input className="form-control" type="text" name="lastName" className="form-control" value={form.lastName}
                               onChange={this.onChange} placeholder="Last Name"/>
                    </div>

                    <div className="form-group">
                        First Name:
                        <input className="form-control" type="text" name="firstName" className="form-control" value={form.firstName}
                               onChange={this.onChange} placeholder="First Name"/>
                    </div>

                    <div className="form-group">
                        UserName:
                        <input className="form-control" type="text" name="userName" className="form-control" value={form.userName}
                               onChange={this.onChange} placeholder="Username"/>
                    </div>

                    <div className="form-group">
                        Phone Number:
                        <input className="form-control" type="text" name="phoneNumber" className="form-control" value={form.phoneNumber}
                               onChange={this.onChange} placeholder="phoneNumber"/>
                    </div>

                    <div className="form-group">
                        Password:
                        <input className="form-control" type="text" name="password" className="form-control" value={form.password}
                               onChange={this.onChange} placeholder="password"/>
                    </div>

                    <div className="form-group">
                        Address Line 1:
                        <input className="form-control" type="text" name="addressLine1" className="form-control" value={form.addressLine1}
                               onChange={this.onChange} placeholder="addressLine1"/>
                    </div>

                    <div className="form-group">
                        Address Line 2:
                        <input className="form-control" type="text" name="addressLine2" className="form-control" value={form.addressLine2}
                               onChange={this.onChange} placeholder="addressLine2"/>
                    </div>

                    <div className="form-group">
                        Suburb:
                        <input className="form-control" type="text" name="suburb" className="form-control" value={form.suburb}
                               onChange={this.onChange} placeholder="suburb"/>
                    </div>

                    <div className="form-group">
                        State:
                        <input className="form-control" type="text" name="state" className="form-control" value={form.state}
                               onChange={this.onChange} placeholder="state"/>
                    </div>

                    <div className="form-group">
                        Country:
                        <input className="form-control" type="text" name="country" className="form-control" value={form.country}
                               onChange={this.onChange} placeholder="country"/>
                    </div>

                    <div className="form-group">
                        Post Code:
                        <input className="form-control" type="text" name="postCode" className="form-control" value={form.postCode}
                               onChange={this.onChange} placeholder="postCode"/>
                    </div>



                    <div className="form-group">
                        <input type="submit" name="btn" value="Add"
                               className="btn btn-outline-danger float-right login_btn"/>
                    </div>


                </form>

            </div>
        );
    }

};

export default AddAdmin;