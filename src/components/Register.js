import React, {Component} from 'react';
import {register} from './UserFunctions';

class Register extends Component {

    constructor(){
        super();
        this.state = {
            username: '',
            email: '',
            address: '',
            postalCode: '',
            mobile: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            username: this.state.username,
            email: this.state.email,
            address: this.state.address,
            postalCode: this.state.postalCode,
            mobile: this.state.mobile,
            password: this.state.password
        }

        register(user).then(res => {
            if(res){
                this.props.history.push('/login')
            }
        })
    }

    render() {
        return (
            <div className= "container">
                <h2>
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <form noValidate onSubmit={this.onSubmit}>
                                <h2 className="h3 mb-3 font-weight-normal">
                                    <p align="center"> Customer Registration</p>
                                    <div className="form-group">
                                        <label htmlFor="username">User Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            placeholder="Enter User Name"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="address"
                                            placeholder="Enter Address"
                                            value={this.state.address}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="postalCode">PostalCode</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="postalCode"
                                        placeholder="Enter PostalCode"
                                        value={this.state.postalCode}
                                        onChange={this.onChange}
                                    />
                                </div>
                                    <div className="form-group">
                                        <label htmlFor="postalCode">Mobile</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="mobile"
                                            placeholder="Enter Mobile Number"
                                            value={this.state.mobile}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter Password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <button className="btn btn-lg btn-primary btn-block">Register</button>
                                </h2>
                            </form>
                        </div>

                    </div>
                </h2>

            </div>
        );
    }
}

export default Register;