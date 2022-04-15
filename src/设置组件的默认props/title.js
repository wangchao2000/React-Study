import React, { Component } from 'react'

class Title extends Component {
    static defaultProps = {
        name: 'React'
    }
    render() {
        return (
            <div>
                <h1>欢迎学习{this.props.name}</h1>
            </div>
        )
    }
}

export default Title
