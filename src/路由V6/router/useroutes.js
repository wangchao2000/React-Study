import React from 'react'
import { useRoutes } from 'react-router-dom'
import Center from '../components/Center'
import Cinema from '../components/Cinema'
import Comingsoon from '../components/Comingsoon'
import Detail from '../components/Detail'
import Film from '../components/Film'
import Login from '../components/Login'
import NotFound from '../components/NotFound'
import Nowplaying from '../components/Nowplaying'


import Redirect from './Redirect'

function MRouter() {
    const element = useRoutes([
        {
            path: "/film",
            element: (<Film />),
            children: [
                {
                    path: "",
                    element: <Redirect to="/film/nowplaying" />
                },
                {
                    path: "nowplaying",
                    element: <Nowplaying />
                },
                {
                    path: "comingsoon",
                    element: <Comingsoon />
                }
            ]
        },
        {
            path: "/cinema",
            element: (<Cinema />)
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/center",
            element:
                <AuthComponent>
                    <Center />
                </AuthComponent>
        },
        {
            path: "/",
            element: (<Redirect to="/film" />)
        },
        {
            path: "/detail/:id",
            element: (<Detail />)
        },
        {
            path: "*",
            element: (<NotFound />)
        }
    ])
    return (
        element
    )
}

export default MRouter

function AuthComponent({ children }) {
    const isLogin = localStorage.getItem("token")
    return isLogin ? children : <Redirect to="/login" />
}
