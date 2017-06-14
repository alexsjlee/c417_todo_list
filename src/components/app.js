import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import ViewList from './view_list'
import ViewTodo from './view_todo'
import AddTodo from './add_form';
import NavBar from './navbar';

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1 className="text-center">To Do List</h1>
                <Route component={ NavBar } />
                <Route exact path="/" component={ ViewList }/>
                <Route path="/todo/:id" component={ ViewTodo }/>
                <Route path="/add-todo" component={ AddTodo }/>
            </div>
        </Router>
    );
};

export default App;
