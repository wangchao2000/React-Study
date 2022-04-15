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

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decreaseCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <Provider value={{
                count: this.state.count,
                increaseCount: this.increaseCount,
                decreaseCount: this.decreaseCount
            }}>
                {this.props.children}
            </Provider>
        )
    }
}

export {
    CountConsumer,
    CountProvider
}

const CountButton = (props) => {
    return (
        <CountConsumer>
            {/* // consumer的children必须是⼀个⽅法 */}
            {
                ({ increaseCount, decreaseCount }) => {
                    const { type } = props
                    const handleClick = type === 'increase' ? increaseCount :
                        decreaseCount
                    const btnText = type === 'increase' ? '+' : '-'
                    return <button onClick={handleClick}>{btnText}</button>
                }
            }
        </CountConsumer>
    )
}

//    定义count组件，⽤于显示数量
const Count = (props) => {
    return (
        <CountConsumer>
            {
                ({ count }) => {
                    return <span>{count}</span>
                }
            }
        </CountConsumer>
    )
}

export {
    CountButton,
    Count
}
