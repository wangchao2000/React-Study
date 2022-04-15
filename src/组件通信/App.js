import React, { Component } from 'react'
import Count from './count'
import CountButton from './countButton'
import { CountProvider, CountConsumer } from './counterContext'

class App extends Component {
    render() {
        return (
            <CountProvider>
                <CountButton type="decrease" />
                <Count />
                <CountButton type="increase" />
            </CountProvider>
        )
    }
}

export default App
