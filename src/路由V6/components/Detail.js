import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [searchParams, setSearchParams] = useSearchParams()
    return (
        <div>
            Detail
            <button onClick={() => {
                setSearchParams({ id: 1000 })
            }}>
                猜你喜欢
            </button>
        </div>
    )
}
