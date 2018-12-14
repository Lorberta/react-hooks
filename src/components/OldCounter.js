import React, { Component } from 'react';

class OldCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrease = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h1>Old Counter {this.state.count}</h1>
                <button onClick={this.increase} >+</button>
                <button onClick={this.decrease} >-</button>
                <div style={{ height: 3, backgroundColor: "orange" }}></div>
            </div>
        )
    }
}

export default OldCounter;