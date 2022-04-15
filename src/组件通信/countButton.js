import React from 'react'
import { CountConsumer, CountProvider } from './counterContext'

const CountButton = (props) => {
    return (
        <CountConsumer>
            {
                ({ increaceCount, decreaceCount }) => {
                    const { type } = props
                    const handleClick = type === 'increase' ? increaceCount : decreaceCount
                    const btnText = type === 'increase' ? '+' : '-'
                    return <button onClick={handleClick}>{btnText}</button>
                }
            }
        </CountConsumer>
    )
}

export default CountButton