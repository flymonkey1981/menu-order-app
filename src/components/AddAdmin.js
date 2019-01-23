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
            <div className="add-admin-wrapper">
                <div className="add-admin-container">
                    <h1>Add Admin</h1>
                    <div className="add-admin-top">
                        <form action="" method="post" onSubmit={(event) => {
                            event.preventDefault();
                            addAdmin(form, history);
                        }}>
                            <div className="form-group">
                                <lable for="lastName">Last Name:</lable>
                                <input className="form-control" type="text" name="lastName" className="form-control text"
                                       value={form.lastName}
                                       onChange={this.onChange} placeholder="Last Name" required/>
                            </div>

                            <div className="form-group">
                                First Name:
                                <input className="form-control" type="text" name="firstName" className="form-control text"
                                       value={form.firstName}
                                       onChange={this.onChange} placeholder="First Name" required/>
                            </div>

                            <div className="form-group">
                                UserName:
                                <input className="form-control" type="text" name="userName" className="form-control text"
                                       value={form.userName}
                                       onChange={this.onChange} placeholder="Username" required/>
                            </div>

                            <div className="form-group">
                                Phone Number:
                                <input className="form-control" type="text" name="phoneNumber" className="form-control text"
                                       value={form.phoneNumber}
                                       onChange={this.onChange} placeholder="phoneNumber" required/>
                            </div>

                            <div className="form-group">
                                Password:
                                <input className="form-control" type="text" name="password" className="form-control text"
                                       value={form.password}
                                       onChange={this.onChange} placeholder="password" required/>
                            </div>

                            <div className="form-group">
                                Address Line 1:
                                <input className="form-control" type="text" name="addressLine1" className="form-control text"
                                       value={form.addressLine1}
                                       onChange={this.onChange} placeholder="addressLine1" required/>
                            </div>

                            <div className="form-group">
                                Address Line 2:
                                <input className="form-control" type="text" name="addressLine2" className="form-control text"
                                       value={form.addressLine2}
                                       onChange={this.onChange} placeholder="addressLine2" required/>
                            </div>

                            <div className="form-group">
                                Suburb:
                                <input className="form-control" type="text" name="suburb" className="form-control text"
                                       value={form.suburb}
                                       onChange={this.onChange} placeholder="suburb" required/>
                            </div>

                            <div className="form-group">
                                State:
                                <input className="form-control" type="text" name="state" className="form-control text"
                                       value={form.state}
                                       onChange={this.onChange} placeholder="state" required/>
                            </div>

                            <div className="form-group">
                                Country:
                                <input className="form-control" type="text" name="country" className="form-control text"
                                       value={form.country}
                                       onChange={this.onChange} placeholder="country" required/>
                            </div>

                            <div className="form-group">
                                Post Code:
                                <input className="form-control" type="text" name="postCode" className="form-control text"
                                       value={form.postCode}
                                       onChange={this.onChange} placeholder="postCode" required/>
                            </div>


                            <div className="form-group">
                                <input type="submit" name="btn" value="Add"
                                       className="btn btn-outline-danger float-right login_btn"/>
                            </div>


                        </form>
                    </div>
                </div>
                <ul className="colorlib-bubbles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

            </div>
        );
    }

};

export default AddAdmin;