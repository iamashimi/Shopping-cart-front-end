import React, {Component} from 'react';
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            address : '',
            postalCode : '',
            mobile : ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username : decoded.username,
            email : decoded.email,
            address : decoded.address,
            postalCode : decoded.postalCode,
            mobile : decoded.mobile
        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <h2>
                            <tbody>
                            <tr>
                                <td>User Name</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>{this.state.address}</td>
                            </tr>
                            <tr>
                                <td>Postal code</td>
                                <td>{this.state.postalCode}</td>
                            </tr>
                            <tr>
                                <td>Mobile</td>
                                <td>{this.state.mobile}</td>
                            </tr>
                            </tbody>
                        </h2>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default Profile;