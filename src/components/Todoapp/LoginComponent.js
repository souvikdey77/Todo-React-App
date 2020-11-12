import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'SouvikDey',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState({
            [event.target.name]
                : event.target.value
        })
    }

    loginClicked() {
        if (this.state.username === 'SouvikDey' && this.state.password === 'SouvikDey') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({ showSuccessMessage: true })
            //this.setState({ hasLoginFailed: false })
        }

        else {
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }
    }

    render() {
        return (
            <div>
                <h1>login</h1>
                <div className="container">
                    UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                </div>
            </div>
        )
    }
}

export default LoginComponent