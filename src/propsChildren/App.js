import React, { Component, Fragment } from 'react'
import Content from './content'
import Title from './title'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Title>React</Title>
                <Content><p>React.js</p>是⼀个构建UI的库</Content>
            </Fragment>
        )
    }
}

export default App
