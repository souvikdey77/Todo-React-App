import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthenticationService from './AuthenticationService';
import  {withRouter} from 'react-router';

class HeaderComponent extends Component {
    render() {

        const userLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(userLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://danskebank.com/" className="navbar-brand">Danske Bank</a></div>
                    <ul className="navbar-nav">
                        {userLoggedIn && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                        {userLoggedIn && <li><Link className="nav-link" to="/todos">todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!userLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {userLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);