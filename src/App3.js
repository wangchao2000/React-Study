import React, { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title = `你点击了${count}次`

    }, [])

    const add = () => {
        setcount(count + 1)
    }
    return (
        <div>
            <p>{count}</p>
            <button onClick={add}>+</button>
        </div>
    )
}

export default Counter
