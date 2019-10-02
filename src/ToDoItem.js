import React from "react";
import './App.css';

/* *****Example of functional component*****
function ToDoItem(props) {
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.completed}/>
            <p>{props.item} <span style={{display: !props.time && "none"}}>at {props.time}</span></p>
        </div>
    )
}
*/

/* *****Class based component***** */
class ToDoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.completed}/>
                <p>{this.props.item} <span style={{display: !this.props.time && "none"}}>at {this.props.time}</span></p>
            </div>
        )
    }
}

export default ToDoItem