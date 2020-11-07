import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="MyTodoApp">
                <LoginComponent />
            </div>
        )

    }
}

class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'SouvikDey',
            password: ''
        }
        this.handleusernamechange = this.handleusernamechange.bind(this);
        this.handlepasswordchange = this.handlepasswordchange.bind(this);
    }

    handleusernamechange(event) {
        console.log(event.target.value);
        this.setState({ username: event.target.value })
    }

    handlepasswordchange(event) {
        this.setState({ password: event.target.value })
    }

    render() {
        return (
            <div>
                UserName: <input type="text" name="UserName" value={this.state.username} onChange={this.handleusernamechange}></input>
                Password: <input type="password" name="Password" value={this.state.password} onChange={this.handlepasswordchange}></input>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;