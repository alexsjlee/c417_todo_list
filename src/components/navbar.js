import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return(
            <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                <Link className="navbar-brand" to="/">To Do List</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            { this.props.location.pathname === '/add-todo' ? <Link className="nav-link" to="/">Go Back</Link> : <Link className="nav-link" to="/add-todo">Add A To Do Item</Link> }
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}