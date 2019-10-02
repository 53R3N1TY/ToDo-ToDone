import React, {Component} from "react";
import './App.css';

class Header extends Component {
    render() {
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay

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
        return (
            <div>
                <header className="header">This is header</header>
                <p style={styles}>Good {timeOfDay}!</p>
            </div>
        )
    }
}

export default Header