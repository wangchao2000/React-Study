import React from 'react'
import { CountConsumer, CountProvider } from './counterContext'

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

export default Count