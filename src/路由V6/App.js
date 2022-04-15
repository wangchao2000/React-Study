import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Tabbar from './components/Tabbar'
import MRouter from './router/useroutes'


function App() {
    return (
        <BrowserRouter>
            <MRouter></MRouter>
            <Tabbar />
        </BrowserRouter>
    )
}

export default App
