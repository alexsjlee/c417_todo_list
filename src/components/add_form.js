import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { add_todo } from '../actions/index';

class AddForm extends Component {
    onFormSubmit(value) {
        console.log('Form Submitted:', value);
        this.props.add_todo(value).then(() => {
            // console.log('Ready to redirect', this.props);
            this.props.history.push('/');
        });
    };

    render() {
        const { handleSubmit } = this.props;
        return(
            <div>
                <Link to="/" className="btn btn-outline-primary">Go Back</Link>
                <h1>Add a To Do Item</h1>
                <div className="col-6">
                    <form onSubmit={handleSubmit( (value) => this.onFormSubmit(value) )}>
                        <div className="form-group">
                            <label>Title:</label>
                            <Field
                                className="form-control"
                                name="title"
                                component="input"
                                type="text"
                                placeholder="Enter Item Title"
                            />
                        </div>
                        <div className="form-group">
                            <label>Details:</label>
                            <Field
                                className="form-control"
                                name="details"
                                component="input"
                                type="text"
                                placeholder="Enter Item Details"
                            />
                        </div>
                        <button className="btn btn-outline-success">Add Item</button>
                    </form>
                </div>
            </div>
        )
    }
}

AddForm = reduxForm({
    form: 'add-form'
})(AddForm);

export default connect(null, { add_todo })(AddForm);
