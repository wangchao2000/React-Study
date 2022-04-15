import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Film() {
    return (
        <div>
            <div style={{ height: "200px", background: "yellow" }}>
                Film
            </div>
            <Outlet></Outlet>
        </div>
    )
}
