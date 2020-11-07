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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name);
        this.setState({
            [event.target.name]
                : event.target.value
        })
    }

    render() {
        return (
            <div>
                UserName: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;