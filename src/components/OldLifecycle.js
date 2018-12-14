import React, { Component } from 'react';

class OldLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    //commented for title in NewLife to change accordingly:

    // componentDidMount() {
    //     document.title = `you clicked ${this.state.count} times`
    // }
    // componentDidUpdate() {
    //     document.title = `you clicked ${this.state.count} times`
    // }

    increase = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1>I am the old lifecycle  {this.state.count} </h1>
                <button onClick={this.increase} >Click me!</button>
                <div style={{ height: 3, backgroundColor: "orange" }}></div>
            </div>
        )
    }
}


export default OldLife;