import React, { Component, Fragment } from 'react'
import Content from './content'
import Title from './title'

class App extends Component {
    render() {
        return (
            <div>
                <Fragment>
                    <Title name="React" />
                    <Content name="React.js"/>
                </Fragment>
            </div>
        )
    }
}

export default App
