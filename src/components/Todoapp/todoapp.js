import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome/:name" component={WelcomeComponent} />
                        <Route path="/todos" component={ListTodosComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </Router>
            </div>
        )

    }
}

class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://danskebank.com/" className="navbar-brand">Danske Bank</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome">Home</Link></li>
                        <li><Link className="nav-link" to="/todos">todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                        <li><Link className="nav-link" to="/logout">Logout</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <hr /> Footer
            </div>
        )
    }
}

class ListTodosComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 1, description: 'Learn React with Java', done: false, targedate: new Date() },
                { id: 2, description: 'Learn React with FullStack', done: false, targedate: new Date() },
                { id: 3, description: 'Become a master of FullStack', done: false, targedate: new Date() }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>List of Todos : </h1>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>isCompleted?</th>
                            <th>targedate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(todo =>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targedate.toString()}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return (
            <div>
                Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>
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