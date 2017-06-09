import React, { Component } from 'react';

export default class AddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                title: '',
                details: ''
            }
        }
    }

    handleInputChange(event, type) {
        const { form } = this.state;

        form[type] = event.target.value;

        this.setState({
            form: { ...form }
        });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        const { form } = this.state;

        this.props.add(form);
        this.setState({
            form: {
                title: '',
                details: ''
            }
        })
    }

    render() {
        const { form } = this.state;
        return (
            <form className="form-inline" onSubmit={(event) => this.handleFormSubmit(event)}>
                <input
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Title"
                    value={form.title}
                    onChange={(event) => this.handleInputChange(event, 'title')}
                />
                <input
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Details"
                    value={form.details}
                    onChange={(event) => this.handleInputChange(event, 'details')}
                />
                <button className="form-control btn btn-outline-primary">Add Item</button>
            </form>
        )
    }
}
