import React, {Component} from "react";
import './App.css';

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            copyright : 'anonymus',
            year : '2019'
        }
    }
    render() {
        return (
            <footer className="footer">copyright @ {this.state.copyright} | {this.state.year}</footer>
        )
    }
}

export default Footer