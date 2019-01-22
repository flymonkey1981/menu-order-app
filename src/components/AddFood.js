import PropTypes from 'prop-types';
import React, {Component} from 'react';
import '../styles/components/addFood.scss';

const propTypes = {
    addFood: PropTypes.func.isRequired
};

class AddFood extends Component {
    constructor() {
        super();
        this.state = {
            form: {
               name:'',
               stock:0,
               price:0

            }

        };
    }

    onChange = (e) => {
        let form = {...this.state.form};
        form[e.target.name] = e.target.value
        this.setState({form});
    }


    render(){
        const {addFood, history} = this.props;
        const {form} = this.state;
        return(
            <div className="add-food">
                <h1>Add Food</h1>
                <form action="" method="post" onSubmit={(event) => {
                    event.preventDefault();
                    addFood(form, history);
                }}>
                    <div className="form-group">
                        <lable htmlFor="name">Food Name:</lable>
                        <input className="form-control" type="text" name="name" className="form-control"
                               value={form.name}
                               onChange={this.onChange} placeholder="Food Name"/>
                    </div>

                    <div className="form-group">
                        Stock:
                        <input className="form-control" type="text" name="stock" className="form-control"
                               value={form.stock}
                               onChange={this.onChange} placeholder="Stock"/>
                    </div>

                    <div className="form-group">
                        Unit Price:
                        <input className="form-control" type="text" name="price" className="form-control"
                               value={form.price}
                               onChange={this.onChange} placeholder="Price"/>
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

AddFood.propTypes = propTypes;

export default AddFood;