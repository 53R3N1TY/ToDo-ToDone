import React, {Component} from "react";
import './App.css';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            title:'To Do App',
            subtitle:'Keep track from to do to done',
            isLoggedIn:true
        }
    }
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        let displayLog

        const styles = {
            fontSize: 30
        }

        if (hours < 12) {
            timeOfDay = "morning"
            styles.color = "#04756F"
        }
        else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
            styles.color = "#8914A3"
        }
        else {
            timeOfDay = "night"
            styles.color = "F9FF00"
        }

        if (this.state.isLoggedIn === true) {
            displayLog = "In"
        }
        else {
            displayLog = "Out"
        }

        return (
            <div>
                <header className="header">
                    <h3>{this.state.title}</h3>
                    <p className="subtitle">{this.state.subtitle}</p>
                </header>
                <p style={styles}>Good {timeOfDay}! 
                    <span>You are currently logged {displayLog}</span>
                </p>
            </div>
        )
    }
}

export default Header