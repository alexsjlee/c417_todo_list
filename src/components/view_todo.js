import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ViewTodo extends Component {

    componentDidMount() {
        console.log('ViewTodo props:', this.props.match.params.id);
        this.props.get_one(this.props.match.params.id);
    }

    handleDelete() {
        console.warn('Ready to delete item:', this.props.todo._id);
        this.props.delete_todo(this.props.todo._id).then(() => {
            this.props.history.push('/')
        });

    }

    handleComplete() {
        console.info('Toggle Complete Clicked!');
        this.props.toggle_complete(this.props.todo._id);
    }

    handleDateStamp(time) {
        return new Date(Number(time)).toLocaleDateString();
    }

    handleTimeStamp(time) {
        return new Date(Number(time)).toLocaleTimeString();
    }

    render() {
        console.log('Single Todo:', this.props.todo);
        const { todo } = this.props;

        if(!todo) {
            return <h1>Loading...</h1>
        }

        return (
            <div>
                <Link to="/" className="btn btn-outline-primary">Back to List</Link>
                <h1>Title: {todo.title}</h1>
                <hr/>
                <h4>{`Created on ${this.handleDateStamp(todo.created)} at ${this.handleTimeStamp(todo.created)}`}</h4>
                {todo.complete ? <h4>{`Completed on ${this.handleDateStamp(todo.completed)} at ${this.handleTimeStamp(todo.completed)}`}</h4> : <h4>Not Completed</h4>}
                <hr/>
                <h4>Details: {todo.details}</h4>
                
                <button className={`btn btn-outline-${todo.complete ? 'danger' : 'primary'}`} onClick={() => this.handleComplete()}>{todo.complete ? 'JK Not Complete' : 'Complete Item'}</button>
                <button className="btn btn-outline-danger" onClick={() => this.handleDelete()}>Delete To Do Item</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todo: state.todos.single
    }
}

export default connect(mapStateToProps, actions)(ViewTodo);