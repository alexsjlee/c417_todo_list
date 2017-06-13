import React, { Component} from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { get_one, delete_todo } from '../actions/index';

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
                <h4>Details: {todo.details}</h4>
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

export default connect(mapStateToProps, { get_one, delete_todo })(ViewTodo);