import React, { Component, createContext } from 'react'

const {
    Provider,
    Consumer: CountConsumer
} = createContext()

class CountProvider extends Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
    }
    increaceCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decreaceCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <Provider value={{
                count: this.state.count,
                increaceCount: this.increaceCount,
                decreaceCount: this.decreaceCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export { CountProvider, CountConsumer }