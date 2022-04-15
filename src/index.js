import React from "react"
import App from "./HOC高阶组件/App"


import { createRoot } from 'react-dom/client';


import { Provider } from 'react-redux'
import store from './Redux学习/store'
console.log(store);
window.store = store



const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>

)

