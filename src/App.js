import React, {Component} from 'react';
import Style from './App.module.css';

class App extends Component {
    curTime = new Date().toLocaleTimeString();
    state = {
        curTime: this.curTime,
    }

    render() {
        this.curTime = new Date().toLocaleTimeString();
        setInterval(() => (
            this.setState(
                {curTime: this.curTime}
            )
        ), 1000);
        return (
            <div className={Style.ClockDiv}>
                <h1 className={Style.Heading}>{this.state.curTime}</h1>
            </div>

        )
    }
}

export default App;
