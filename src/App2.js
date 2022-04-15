import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            xing: '',
            ming: ''
        }
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // const {
        //     xing,
        //     ming
        // } = this.state
        return (
            <div>
                <label>
                    <span>姓:</span>
                    <input type="text" name="xing" value={this.state.xing}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    <span>名:</span>
                    <input type="text" name="ming" value={this.state.ming}
                        onChange={this.handleInputChange}
                    />
                </label>
                <p>欢迎：{this.state.xing}{this.state.ming}</p>
            </div>
        )
    }
}

export default App
