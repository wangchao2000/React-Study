/*
 * @作者: kerwin
 * @公众号: 大前端私房菜
 */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()
    return (
        <div>
            <input type="text"/>
            <button onClick={()=>{
                localStorage.setItem("token","kerwin")

                navigate("/center")
            }}>登录</button>
        </div>
    )
}
