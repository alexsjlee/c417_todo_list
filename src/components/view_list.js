import React, { Component } from 'react';
import './app.css';

class ViewList extends Component {

    render() {
        let liComplete = "list-group-item toggleComplete";
        let liNotComplete = "list-group-item";
        let btnComplete = "btn btn-danger btn btn-sm";
        let btnNotComplete = "btn btn-danger btn btn-sm hidden";
        const listElements = this.props.list.map((item, index) => {
            return (

                <li className={item.completed ? liComplete : liNotComplete} key={index}>
                    {`${item.title}: ${item.details}`}
                    <span className="ml-auto">
                        <button className={item.completed ? btnComplete : btnNotComplete} onClick={() => this.props.delete(index)}>Delete</button>
                        <span> </span>
                        <button className="btn btn-success btn btn-sm" onClick={() => this.props.complete(index)}>{item.completed ? 'JK Not Complete' : 'Complete'}</button>
                    </span>
                </li>
            );
        });

        return (
            <div>
                <ul className="list-group">
                    {listElements}
                </ul>
            </div>
        )
    }
}

export default ViewList;