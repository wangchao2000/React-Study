import React, { Component, Fragment } from 'react'
import Content from './content'
import Title from './title'

class App extends Component {
    render() {
        return (
            <Fragment>
                <Title />
                <Content />
            </Fragment>
        )
    }
}

export default App
