import React, { Component } from 'react'

class Title extends Component {
    render() {
        return (
            <div>
                <h1>欢迎学习{this.props.children}</h1>
            </div>
        )
    }
}

export default Title
