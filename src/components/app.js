import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import ViewList from './view_list'
import ViewTodo from './view_todo'
import AddTodo from './add_form';

const App = () => (
    <Router>
        <div className="container">
            <h1 className="text-center">To Do List</h1>
            <Link className="btn btn-outline-success" to="/add-todo">Add To Do Item</Link>
            <Route exact path="/" component={ ViewList } />
            <Route path="/todo/:id" component={ ViewTodo } />
            <Route path="/add-todo" component={ AddTodo } />
        </div>
    </Router>
);

export default App;
