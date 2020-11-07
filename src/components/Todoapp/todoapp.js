import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
            </div>
        )

    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome SouvikDey
            </div>
        )
    }
}

function ErrorComponent() {
    return <div>An error occured.Please contact support to abcd-efgh!! </div>
}

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
            this.props.history.push("/welcome")
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
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.loginClicked}>Login</button>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
            </div>
        )
    }
}
export default TodoApp;