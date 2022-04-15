import React from 'react'

export default function ListItem({ id, title, price, qty, handleQtySub, handleQtyAdd }) {
    return (
        <li>
            <h3>{title}</h3>
            <p>{price}</p>
            <p>
                <button onClick={() => {
                    handleQtySub(id)
                }}>-
                </button>
                {qty}
                <button onClick={() => {
                    handleQtyAdd(id)
                }}>+</button>
            </p>
        </li>

    )
}
