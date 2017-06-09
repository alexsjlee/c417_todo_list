import React, { Component } from 'react';
import ViewList from './view_list';
import AddForm from './add_form';
import './app.css';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: []
        };

        this.BASE_URL = 'http://api.scottbowlerdev.com';
        this.API_KEY = '?key=c417alex';
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get(`${this.BASE_URL}/todos${this.API_KEY}`).then((resp) => {
            console.log('componentDidMount Server response:', resp.data.todos);

            this.setState({
                list: resp.data.todos
            });
        });
    }

    addItem(item) {
        axios.post(`${this.BASE_URL}/todos${this.API_KEY}`, item).then((resp) => {
            console.log('addItem Server response:', resp.data.success);
            if(resp.data.success) {
                this.getData();
            }
        })
    }

    deleteItem(id) {
        axios.delete(`${this.BASE_URL}/todos/${id + this.API_KEY}`).then((resp) => {
            console.log('Response from Delete:', resp);
            if(resp.data.success) {
                this.getData();
            }
        })
    }

    toggleItem(id) {
        axios.put(`${this.BASE_URL}/todos/${id + this.API_KEY}`).then((resp) => {
            console.log('Response from Toggle:', resp);
            if(resp.data.success) {
                this.getData();
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center">To Do List</h1>
                <AddForm add={(item) => this.addItem(item)}/>
                <ViewList
                    list={this.state.list}
                    delete={(index) => this.deleteItem(index)}
                    complete={(index) => this.toggleItem(index)}
                />
            </div>
        )
    }
}

export default App;
